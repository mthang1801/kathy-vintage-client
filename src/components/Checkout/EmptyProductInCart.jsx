import React from 'react'
import {Wrapper, Icon , Title, Button} from "./styles/EmptyProductInCart.styles"
import {AiOutlineShoppingCart} from "react-icons/ai"
import useLanguage from "../Global/useLanguage"
import {useTheme} from "../../theme"
import {navigate} from  "gatsby"
const EmptyProductInCart = () => {
  const {i18n, lang} = useLanguage();
  const {checkout} = i18n.store.data[lang].translation;
  const {theme} = useTheme()
  return (
    <Wrapper theme={theme}>   
      <Icon>
      <AiOutlineShoppingCart/>
        </Icon>   
      
      <Title>{checkout.cartEmpty}</Title>
      <Button onClick={() => navigate("/")}>{checkout.buttonContinueShopping}</Button>
    </Wrapper>
  )
}

export default EmptyProductInCart
