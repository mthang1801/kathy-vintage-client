import React from 'react'
import {GoogleLoginButtonWrapper, ButtonIcon, ButtonText} from "./styles/LoginButton.styles"
import useLanguage from "../Global/useLanguage"
import {FcGoogle} from "react-icons/fc"
const GoogleLoginButtonComponent = (props) => {
  const {i18n, lang} = useLanguage();
  const {auth} = i18n.store.data[lang].translation;
 
  return (
    <GoogleLoginButtonWrapper {...props}>
      <ButtonIcon><FcGoogle/></ButtonIcon>
      <ButtonText>{auth.signInGoogle}</ButtonText>
    </GoogleLoginButtonWrapper>
  )
}

export default GoogleLoginButtonComponent
