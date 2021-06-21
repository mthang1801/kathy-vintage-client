import React from "react"
import {
  FacebookLoginButtonWrapper,
  ButtonIcon,
  ButtonText,
} from "./styles/LoginButton.styles"
import { useLanguage } from "../../locales"
import { RiFacebookFill } from "react-icons/ri"
const FacebookLoginButtonComponent = props => {
  const {
    translation: { auth },
  } = useLanguage()

  return (
    <FacebookLoginButtonWrapper {...props}>
      <ButtonIcon>
        <RiFacebookFill />
      </ButtonIcon>
      <ButtonText>{auth.signInFacebook}</ButtonText>
    </FacebookLoginButtonWrapper>
  )
}

export default FacebookLoginButtonComponent
