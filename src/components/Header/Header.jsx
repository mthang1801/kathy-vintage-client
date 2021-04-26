import React from "react"
import {
  Wrapper,
  SearchContainer,
  BrandLogo,
  Responsive,
  Flex
} from "./styles/Header.styles"
import LanguagesSelection from "./LanguagesSelection"
import Logo from "../../images/brandlogo.png"
import { Link } from "@reach/router"
import ButtonColorMode from "../Controls/ButtonColorMode"
import Search from "./Search"
import { useThemeUI } from "theme-ui"
import { Button } from "@material-ui/core"
import useLanguage from "../Global/useLanguage"
const Header = () => {
  const { i18n, lang } = useLanguage()
  const { auth } = i18n.store.data[lang].translation
  const { theme, colorMode } = useThemeUI()
  return (
    <Wrapper theme={theme.colors[colorMode]}>
      <Flex>
        <Link to="/">
          <BrandLogo src={Logo} alt="logo" />
        </Link>
        <SearchContainer>
          <Search />
        </SearchContainer>
      </Flex>
      <Flex>
        <Responsive>
          <LanguagesSelection />
        </Responsive>
        <Responsive>
          <ButtonColorMode />
        </Responsive>
        <Responsive>
          <Button color="primary">{auth.login}</Button>
          <Button color="secondary">{auth.register}</Button>
        </Responsive>
      </Flex>
    </Wrapper>
  )
}

export default Header
