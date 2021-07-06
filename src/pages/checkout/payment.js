import React, { useState, useEffect } from "react"
import Layout from "../../containers/Layout"
import {
  ContentContainer,
  Wrapper,
  Title,
} from "../../styles/checkout.payment.styles"
import { increaseSoldNumberProduct } from "../../database/products"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import CheckoutPaymentTypeOfShipping from "../../components/Checkout/CheckoutTypeOfShipping.Payment"
import { useLanguage } from "../../locales"
import Invoice from "../../components/Checkout/Invoice"
import EmptyProductInCart from "../../components/Checkout/EmptyProductInCart"
import { useTheme } from "../../theme"
import OrderedProductItemPayment from "../../components/Checkout/OrderedProductItem.Payment"
import UserInformationPayment from "../../components/Checkout/UserInformation.Payment"
import TypeOfPayment from "../../components/Checkout/TypeOfPayment"
import { selectOrdersError } from "../../redux/orders/orders.selectors"
import { useLocation } from "@reach/router"
import {
  selectUserError,
  selectUserFetched,
} from "../../redux/user/user.selectors"
import {
  addNewOrder,
  ordersClearError,
} from "../../redux/orders/orders.actions"
import {
  updateUserPaymentAndShippingType,
  userClearError,
} from "../../redux/user/user.actions"
import { navigate } from "gatsby"
import StripeButton from "../../components/Controls/StripeButton"
import Button from "@material-ui/core/Button"
import POLICY from "../../constants/policy"
import {
  orderTotalPrice,
  totalPriceWithShippingFee,
} from "../../utils/calculateOrderPrice"
import LoadingDialog from "../../components/UI/FeedBacks/Dialog/LoadingDialog"
import ErrorDialog from "../../components/UI/FeedBacks/Dialog/ErrorDialog"
import { mergeDuplicateProductsInCart } from "../../redux/cart/cart.utils"
const tax = POLICY.tax

const Payment = ({
  cartItems,
  user,
  userFetched,
  addNewOrder,
  updateUserPaymentAndShippingType,
  orderError,
  userError,
  userClearError,
  ordersClearError,
}) => {
  const {
    translation: { checkout },
  } = useLanguage()
  const { payment } = checkout
  const { theme } = useTheme()
  const [loading, setLoading] = useState(false)
  const { pathname } = useLocation()
  const [shippingMethod, setShippingMethod] = useState(
    payment.typeOfShipping.standard
  )
  const [error, setError] = useState(undefined)
  const [paymentMethod, setPaymentMethod] = useState(
    user?.information?.paymentMethod
      ? payment.typeOfPayment[user.information.paymentMethod]
      : payment.typeOfPayment.payment_in_cash
  )
  const [shippingFee, setShippingFee] = useState(
    shippingMethod === "standard" ? 15000 : 30000
  )

  useEffect(() => {
    setShippingFee(shippingMethod === "standard" ? 15000 : 30000)
  }, [shippingMethod])

  useEffect(() => {
    if (!user && userFetched) {
      navigate("/auth", { state: { from: pathname } })
    }
  }, [user, userFetched])
  const _orderTotalPrice = orderTotalPrice(cartItems)  
  const totalPrice = totalPriceWithShippingFee(
    _orderTotalPrice,
    shippingFee
  )
  const onClickProceedOrder = async (tokenId = null) => {
    setLoading(true)
    try {
      await addNewOrder(
        user,
        mergeDuplicateProductsInCart(cartItems),
        shippingFee,
        totalPrice,
        paymentMethod.key,
        shippingMethod.key,
        tokenId
      )
      await updateUserPaymentAndShippingType(
        paymentMethod.key,
        shippingMethod.key
      )
      await increaseSoldNumberProduct(cartItems)
      navigate("/checkout/complete", { state: { from: "/checkout/payment" } })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError(error.message || error)
    }
  }

  const handleClearError = () => {
    userClearError()
    ordersClearError()
  }

  if (userFetched && user && !user?.information)
    return navigate("/checkout/shipping")
  return (
    <Layout>
      <LoadingDialog open={loading || !userFetched} />
      <ErrorDialog
        content={orderError || userError || error}
        onClickCloseError={handleClearError}
      />
      {user && (
        <>
          {cartItems.length ? (
            <ContentContainer>
              <div>
                <Title>1. {payment.typeOfShipping.title}</Title>
                <Wrapper theme={theme}>
                  <CheckoutPaymentTypeOfShipping
                    user={user}
                    cartItems={cartItems}
                    types={payment.typeOfShipping}
                    shippingMethod={shippingMethod}
                    setShippingMethod={setShippingMethod}
                  />
                  <p>{payment.listOfOrderedProducts}</p>
                  {mergeDuplicateProductsInCart(cartItems).map(product => (
                    <OrderedProductItemPayment
                      key={product.contentful_id}
                      shippingMethod={shippingMethod}
                      product={product}
                    />
                  ))}
                </Wrapper>
                <Title>2. {payment.typeOfPayment.title}</Title>
                <TypeOfPayment
                  user={user}
                  paymentMethod={paymentMethod}
                  setPaymentMethod={setPaymentMethod}
                />
              </div>
              <div>
                <Title>3. {payment.shippingInformation}</Title>
                {user.information && <UserInformationPayment user={user} />}
                <Title>4. {payment.invoice}</Title>
                <Invoice
                  cartItems={cartItems}
                  isPayment
                  shippingFee={shippingFee}
                  orderTotalPrice={_orderTotalPrice}                 
                  totalPrice={totalPrice}
                  tax={tax}
                />
                {paymentMethod.key ===
                payment.typeOfPayment.payment_in_card.key ? (
                  <StripeButton
                    user={user}
                    totalPrice={totalPrice}
                    onClickProceedOrder={tokenId =>
                      onClickProceedOrder(tokenId)
                    }
                  >
                    {" "}
                    <Button
                      color="secondary"
                      variant="contained"
                      style={{ display: "block", width: "100%" }}
                    >
                      {checkout.button_proceed_order}
                    </Button>
                  </StripeButton>
                ) : (
                  <Button
                    color="secondary"
                    variant="contained"
                    style={{ display: "block", width: "100%" }}
                    onClick={() => onClickProceedOrder()}
                  >
                    {checkout.button_proceed_order}
                  </Button>
                )}
              </div>
            </ContentContainer>
          ) : (
            <EmptyProductInCart />
          )}
        </>
      )}
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  user: selectCurrentUser,
  orderError: selectOrdersError,
  userError: selectUserError,
  userFetched: selectUserFetched,
})

const mapDispatchToProps = dispatch => ({
  addNewOrder: (
    user,
    products_line,
    shipping_fee,
    totalPrice,
    payment_method,
    shipping_method,
    tokenId
  ) =>
    dispatch(
      addNewOrder(
        user,
        products_line,
        shipping_fee,
        totalPrice,
        payment_method,
        shipping_method,
        tokenId
      )
    ),
  updateUserPaymentAndShippingType: (paymentMethod, shippingMethod) =>
    dispatch(updateUserPaymentAndShippingType(paymentMethod, shippingMethod)),
  ordersClearError: () => dispatch(ordersClearError()),
  userClearError: () => dispatch(userClearError()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
