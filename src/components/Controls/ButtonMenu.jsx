import React from 'react'
import {Wrapper} from "./styles/ButtonMenu.styles"
import {useThemeUI} from "theme-ui"
const ButtonMenu = ({...props}) => {
  const {theme, colorMode} = useThemeUI()
  return (
    <Wrapper {...props} theme={theme.colors[colorMode]}>
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  )
}

export default ButtonMenu
