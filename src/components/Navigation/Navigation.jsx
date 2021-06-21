import React from "react"
import { Wrapper } from "./styles/Navigation.styles"
import { useThemeUI } from "theme-ui"
import PortfoliosListDropdown from "../Dropdown/PortfoliosListDropdown"
import NavigationsList from "./NavigationsList"
const Navigation = () => {
  const { theme, colorMode } = useThemeUI()
  return (
    <Wrapper theme={theme}>
      <PortfoliosListDropdown />
      <NavigationsList />
    </Wrapper>
  )
}

export default Navigation
