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
const StripeCheckoutButton = ({ totalPrice, clearCartItems, user, children, onClickProceedOrder }) => {
  const amount = totalPrice
  const CURRENCY = "VND"
  const {i18n, lang} = useLanguage();
  const {typeOfPayment} = i18n.store.data[lang].translation.checkout.payment;
  const { theme } = useTheme()
  let _token ;
  const onToken = amount => token => {    
    _token = token ;
    axios
      .post(PAYMENT_SERVER_URL, {
        source: token.id,
        currency: CURRENCY,
        amount,
      })    
      
  }

  const onClosed = () => {    
    if(_token){
      onClickProceedOrder(_token.id);
    }    
  }
  return (
    <StripeCheckout
      label={typeOfPayment.payment_in_card_button}
      name="Vintage Clothes Shop" 
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
      closed={onClosed}      
    >
     {children}
    </StripeCheckout>
  )
}

export default connect(null, { clearCartItems })(StripeCheckoutButton)
