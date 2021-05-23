import React from 'react'
import {Wrapper, ImageContainer , Title, Button} from "./styles/EmptyOrder.styles"

import useLanguage from "../Global/useLanguage"
import {ImFileEmpty} from "react-icons/im"
import {useTheme} from "../../theme"
import {navigate} from  "gatsby"

const EmptyOrder = () => {
  const {i18n, lang} = useLanguage();
  const {orders} = i18n.store.data[lang].translation;
  const {theme} = useTheme()
  return (
    <Wrapper theme={theme}>   
      <ImageContainer>
        <ImFileEmpty/>
      </ImageContainer>   
      
      <Title>{orders.emptyOrder}</Title>
      <Button onClick={() => navigate("/")}>{orders.buttonBackHome}</Button>
    </Wrapper>
  )
}

export default EmptyOrder
