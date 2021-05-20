import React from "react"
import StripeCheckout from "react-stripe-checkout"
import Button from "@material-ui/core/Button"
import AddIcon from "@material-ui/icons/Add"
import { clearCartItems } from "../../redux/cart/cart.actions"
import { connect } from "react-redux"
import { useTheme } from "../../theme"
import axios from "axios"
import STRIPE_PUBLISHABLE from "../../constants/stripe"
import PAYMENT_SERVER_URL from "../../constants/server"
import useLanguage from "../Global/useLanguage"
const StripeCheckoutButton = ({ totalPrice, clearCartItems, user, children }) => {
  const amount = totalPrice
  const CURRENCY = "VND"
  const {i18n, lang} = useLanguage();
  const {typeOfPayment} = i18n.store.data[lang].translation.checkout.payment;
  const { theme } = useTheme()
  const onToken = amount => token => {
    console.log(token)
    const filledToken = {
      ...token,       
      card : {
        address_city : user.information.city, 
        address_country : "Viet nam",
        address_line1 : user.information.address,
        name : user.information.fullname
      }
    }
    axios
      .post(PAYMENT_SERVER_URL, {
        source: token.id,
        currency: CURRENCY,
        amount,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  return (
    <StripeCheckout
      label={typeOfPayment.payment_in_card_button}
      name="Vintage Clothes Shop"      
      shippingAddress
      allowRememberMe
      currency={CURRENCY}
      email={user.email}
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${totalPrice.toLocaleString("de-DE", {
        style: "currency",
        currency: CURRENCY,
      })}`}
      amount={amount}
      panelLabel={typeOfPayment.payment_in_card_button}
      token={onToken(amount)}
      stripeKey={STRIPE_PUBLISHABLE}
      
    >
     {children}
    </StripeCheckout>
  )
}

export default connect(null, { clearCartItems })(StripeCheckoutButton)
