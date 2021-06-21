import React from "react"
import {
  GoogleLoginButtonWrapper,
  ButtonIcon,
  ButtonText,
} from "./styles/LoginButton.styles"
import { useLanguage } from "../../locales"
import { FcGoogle } from "react-icons/fc"
const GoogleLoginButtonComponent = props => {
  const {
    translation: { auth },
  } = useLanguage()

  return (
    <GoogleLoginButtonWrapper {...props}>
      <ButtonIcon>
        <FcGoogle />
      </ButtonIcon>
      <ButtonText>{auth.signInGoogle}</ButtonText>
    </GoogleLoginButtonWrapper>
  )
}

export default GoogleLoginButtonComponent
