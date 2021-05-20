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
import { navigate } from "gatsby"
import StripeButton from "../../components/Controls/StripeButton"
import Button from "@material-ui/core/Button"
import POLICY from "../../constants/policy"

const tax = POLICY.tax

const Payment = ({ cartItems, user }) => {
  const { i18n, lang } = useLanguage()
  const { checkout } = i18n.store.data[lang].translation
  const { payment } = checkout
  const { theme } = useTheme()
  const [shippingType, setShippingType] = useState(
    payment.typeOfShipping.standard
  )
  const [paymentMethod, setPaymentMethod] = useState(
    payment.typeOfPayment.payment_in_cash.key
  )
  const [shippingFee, setShippingFee] = useState(
    shippingType === "standard" ? 15000 : 30000
  )

  useEffect(() => {
    setShippingFee(shippingType === "standard" ? 15000 : 30000)
  }, [shippingType])

  const onClickProceedOrder = () => {
    navigate("/checkout/shipping")
  }

  const totalPriceBeforeTax = cartItems.reduce(
    (acc, item) =>
      item.isDiscount && item.discountPercentage
        ? acc +
          (item.unitPrice * item.quantity * (100 - item.discountPercentage)) /
            100
        : acc + item.unitPrice * item.quantity,
    0
  )

  const totalPriceAfterTax = (totalPriceBeforeTax * (100 + tax)) / 100
  const totalPrice = totalPriceAfterTax + shippingFee

  if (!user.information) return navigate("/checkout/shipping")
  return (
    <Layout>
      {cartItems.length ? (
        <ContentContainer>
          <div>
            <Title>1. {payment.typeOfShipping.title}</Title>
            <Wrapper theme={theme}>
              <CheckoutPaymentTypeOfShipping
                user={user}
                cartItems={cartItems}
                types={payment.typeOfShipping}
                shippingType={shippingType}
                setShippingType={setShippingType}
              />
              <p>{payment.listOfOrderedProducts}</p>
              {cartItems.map(product => (
                <OrderedProductItemPayment
                  key={product.contentful_id}
                  shippingType={shippingType}
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
              totalPriceBeforeTax={totalPriceBeforeTax}
              totalPriceAfterTax={totalPriceAfterTax}
              totalPrice={totalPrice}
              tax={tax}
            />
            {paymentMethod === payment.typeOfPayment.payment_in_card.key ? (
              <StripeButton user={user} totalPrice={totalPrice}>
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
                onClick={onClickProceedOrder}
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
})

export default connect(mapStateToProps)(Payment)
