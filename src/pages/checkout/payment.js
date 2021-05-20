import React, { useState, useEffect } from "react"
import Layout from "../../containers/Layout"
import {
  ContentContainer,
  Wrapper,
  Title,
} from "../../styles/checkout.payment.styles"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import CheckoutPaymentTypeOfShipping from "../../components/Checkout/CheckoutTypeOfShipping.Payment"
import useLanguage from "../../components/Global/useLanguage"
import Invoice from "../../components/Checkout/Invoice"
import EmptyProductInCart from "../../components/Checkout/EmptyProductInCart"
import { useTheme } from "../../theme"
import OrderedProductItemPayment from "../../components/Checkout/OrderedProductItem.Payment"
import UserInformationPayment from "../../components/Checkout/UserInformation.Payment"
import TypeOfPayment from "../../components/Checkout/TypeOfPayment"
import { selectOrdersError } from "../../redux/orders/orders.selectors"
import { selectUserError } from "../../redux/user/user.selectors"
import { addNewOrder } from "../../redux/orders/orders.actions"
import { updateUserPaymentAndShippingType } from "../../redux/user/user.actions"
import { navigate } from "gatsby"
import StripeButton from "../../components/Controls/StripeButton"
import Button from "@material-ui/core/Button"
import POLICY from "../../constants/policy"
import {
  totalPriceBeforeTax,
  totalPriceAfterTax,
  totalPriceWithShippingFee,
} from "../../utils/calculateOrderPrice"
import LoadingDialog from "../../components/Dialog/LoadingDialog"
import ErrorDialog from "../../components/Dialog/ErrorDialog"
const tax = POLICY.tax

const Payment = ({
  cartItems,
  user,
  addNewOrder,
  updateUserPaymentAndShippingType,
  orderError,
  userError,
}) => {
  const { i18n, lang } = useLanguage()
  const { checkout } = i18n.store.data[lang].translation
  const { payment } = checkout
  const { theme } = useTheme()
  const [loading, setLoading] = useState(false)
  const [shippingMethod, setShippingMethod] = useState(
    payment.typeOfShipping.standard
  )
  const [paymentMethod, setPaymentMethod] = useState(
    user?.information?.payment_method
      ? payment.typeOfPayment[user.information.payment_method]
      : payment.typeOfPayment.payment_in_cash
  )
  const [shippingFee, setShippingFee] = useState(
    shippingMethod === "standard" ? 15000 : 30000
  )

  useEffect(() => {
    setShippingFee(shippingMethod === "standard" ? 15000 : 30000)
  }, [shippingMethod])

  const onClickProceedOrder = async (tokenId = null) => {
    setLoading(true)
    try {
      await addNewOrder(
        user,
        cartItems,
        shippingFee,
        paymentMethod.key,
        shippingMethod.key,
        tokenId
      )
      await updateUserPaymentAndShippingType(
        paymentMethod.key,
        shippingMethod.key
      )
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const _totalPriceBeforeTax = totalPriceBeforeTax(cartItems)
  const _totalPriceAfterTax = totalPriceAfterTax(_totalPriceBeforeTax, tax)
  const _totalPrice = totalPriceWithShippingFee(
    _totalPriceAfterTax,
    shippingFee
  )

  if (!user?.information) return navigate("/checkout/shipping")
  return (
    <Layout>
      <LoadingDialog open={loading} />
      <ErrorDialog content={orderError || userError} />
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
              {cartItems.map(product => (
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
            {user.information && <UserInformationPayment user={user} />}
            <Invoice
              cartItems={cartItems}
              isPayment
              shippingFee={shippingFee}
              totalPriceBeforeTax={_totalPriceBeforeTax}
              totalPriceAfterTax={_totalPriceAfterTax}
              totalPrice={_totalPrice}
              tax={tax}
            />
            {paymentMethod === payment.typeOfPayment.payment_in_card.key ? (
              <StripeButton
                user={user}
                totalPrice={_totalPrice}
                onClickProceedOrder={tokenId => onClickProceedOrder(tokenId)}
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
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  user: selectCurrentUser,
  orderError: selectOrdersError,
  userError: selectUserError,
})

const mapDispatchToProps = dispatch => ({
  addNewOrder: (
    user,
    products_line,
    shipping_fee,
    payment_method,
    shipping_method,
    tokenId
  ) =>
    dispatch(
      addNewOrder(
        user,
        products_line,
        shipping_fee,
        payment_method,
        shipping_method,
        tokenId
      )
    ),
  updateUserPaymentAndShippingType: (paymentMethod, shippingMethod) =>
    dispatch(updateUserPaymentAndShippingType(paymentMethod, shippingMethod)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Payment)
