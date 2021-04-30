import React, {useState, useCallback} from "react"
import {
  Wrapper,
  SearchContainer,
  BrandLogo,
  Responsive,
  Flex,
  MobileResponsive,
} from "./styles/Header.styles"
import LanguagesSelection from "./LanguagesSelection"
import Logo from "../../images/brandlogo.png"
import { Link } from "@reach/router"
import ButtonColorMode from "../Controls/ButtonColorMode"
import Search from "./Search"
import { useThemeUI } from "theme-ui"
import { Button } from "@material-ui/core"
import useLanguage from "../Global/useLanguage"
import ButtonMenu from "../Controls/ButtonMenu"
import Cart from "../Cart/Cart"
import Drawer from "../Drawer/Drawer"
const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { i18n, lang } = useLanguage()
  const { auth } = i18n.store.data[lang].translation
  const { theme, colorMode } = useThemeUI()

  const onOpenMenu =useCallback( () => {
    setOpenDrawer(true);
  },[])

  return (
    <>
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
          <Cart/>
        </Responsive>
        <Responsive>
          <Button color="primary">{auth.login}</Button>
          <Button color="secondary">{auth.register}</Button>
        </Responsive>
        <MobileResponsive>
          <Cart/>
          <ButtonMenu onClick={onOpenMenu}/>
        </MobileResponsive>
      </Flex>
    </Wrapper>
    <Drawer open={openDrawer} setOpen={setOpenDrawer}/>
    </>
  )
}

export default Header
