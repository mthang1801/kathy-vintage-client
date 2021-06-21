import React from "react"
import { Wrapper } from "./styles/ButtonMenu.styles"
import { useTheme } from "../../theme"
const ButtonMenu = ({ ...props }) => {
  const { theme } = useTheme()
  return (
    <Wrapper {...props} theme={theme}>
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  )
}

export default ButtonMenu
