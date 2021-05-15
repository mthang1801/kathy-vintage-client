import React, {useEffect} from 'react'
import useLanguage from "../Global/useLanguage"
import {useTheme} from "../../theme"
import {Wrapper, ButtonCheckout} from "./styles/CartAlert.styles"

const CartAlert = ({alertCart,removeAlertCart }) => {
  const {i18n, lang} = useLanguage();
  const {theme} = useTheme();
  const {cart} = i18n.store.data[lang].translation;
  
  useEffect(() => {
    let timing ; 
    if(alertCart){
      clearTimeout(timing);
      timing = setTimeout(() => {        
        removeAlertCart();
      }, 5000)
    }
    return () => clearTimeout(timing);
  }, [alertCart])
  return (
    <Wrapper theme={theme}>    
      <div>{cart.cartAlert}</div>
      <ButtonCheckout to="/checkout">{cart.goToCheckout}</ButtonCheckout>
    </Wrapper>
  )
}

export default CartAlert
