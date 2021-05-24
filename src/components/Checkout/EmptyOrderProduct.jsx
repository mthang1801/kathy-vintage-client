import React from 'react'
import {Wrapper, ImageContainer , Title, Button} from "./styles/EmptyProductInCart.styles"

import useLanguage from "../Global/useLanguage"
import EmptyFolder from "../../images/empty-folder.jpg"
import {useTheme} from "../../theme"
import {navigate} from  "gatsby"

const EmptyOrder = () => {
  const {i18n, lang} = useLanguage();
  const {checkout} = i18n.store.data[lang].translation;
  const {theme} = useTheme()
  return (
    <Wrapper theme={theme}>   
      <ImageContainer>
        <img src={EmptyFolder} alt="empty order"/>
      </ImageContainer>   
      
      <Title>{checkout.orderEmpty}</Title>
      <Button onClick={() => navigate("/")}>{checkout.buttonBackHome}</Button>
    </Wrapper>
  )
}

export default EmptyOrder