import React from 'react'
import {Wrapper} from "./styles/Navigation.styles"
import {useThemeUI} from "theme-ui"
import PortfoliosList from "./PortfoliosList";
import NavigationsList from "./NavigationsList";
const Navigation = () => {
  const {theme, colorMode} = useThemeUI()
  return (
    <Wrapper theme={theme.colors[colorMode]}>
      <PortfoliosList/>
      <NavigationsList/>
    </Wrapper>
  )
}

export default Navigation
