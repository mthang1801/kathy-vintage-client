import React from 'react'
import {FacebookLoginButtonWrapper, ButtonIcon, ButtonText} from "./styles/LoginButton.styles"
import useLanguage from "../Global/useLanguage"
import {RiFacebookFill} from "react-icons/ri"
const FacebookLoginButtonComponent = (props) => {
  const {i18n, lang} = useLanguage();
  const {auth} = i18n.store.data[lang].translation;
 
  return (
    <FacebookLoginButtonWrapper {...props}>
      <ButtonIcon><RiFacebookFill/></ButtonIcon>
      <ButtonText>{auth.signInFacebook}</ButtonText>
    </FacebookLoginButtonWrapper>
  )
}

export default FacebookLoginButtonComponent
