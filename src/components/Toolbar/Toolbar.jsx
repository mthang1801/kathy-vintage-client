import React, { useState, useCallback } from "react"
import {
  Wrapper,
  SearchContainer,
  BrandLogo,
  Responsive,
  Flex,
  MobileResponsive,
} from "./styles/Toolbar.styles"
import Logo from "../../images/brandlogo.png"
import {  useLocation } from "@reach/router"
import {Link} from "gatsby"
import {
  selectCurrentUser,
  selectUserFetched,
  selectUserLoading,
} from "../../redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import Search from "../Search/Search"
import { useTheme } from "../../theme"
import { Button } from "@material-ui/core"
import useLanguage from "../Global/useLanguage"
import ButtonMenu from "../Controls/ButtonMenu"
import Cart from "../Cart/Cart"
import Drawer from "../Navigation/Drawer/Drawer"
import { navigate } from "gatsby"
import UserSettings from "./UserSettings"
import { signInPattern, signUpPattern } from "../../utils/auth"
const Header = ({ userLoading, userFetched, user }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const { i18n, lang } = useLanguage()
  const { auth } = i18n.store.data[lang].translation
  const { theme } = useTheme()
  const { pathname } = useLocation()
  const onOpenMenu = useCallback(() => {
    setOpenDrawer(true)
  }, [])

  const RenderUserSettings = () => (
    <Responsive>
      <UserSettings user={user} />
    </Responsive>
  )
  const patternHideCart = /^\/checkout/
  const RenderUserAuth = () => (
    <>
      {(!userLoading || userFetched) && (
        <Responsive>
          {!signInPattern.test(pathname) && (
            <Button
              color="primary"
              onClick={() => navigate("/auth", { state: { from: pathname } })}
            >
              {auth.login}
            </Button>
          )}
          {!signUpPattern.test(pathname) && (
            <Button
              color="secondary"
              onClick={() =>
                navigate("/auth/signup", { state: { from: pathname } })
              }
            >
              {auth.register}
            </Button>
          )}
        </Responsive>
      )}
    </>
  )
  return (
    <>
      <Wrapper theme={theme}>
        <Flex>
          <Link to="/">
            <BrandLogo src={Logo} alt="logo" />
          </Link>
          <SearchContainer>
            <Search />
          </SearchContainer>
        </Flex>
        <Flex>
          {!patternHideCart.test(pathname) &&  <Cart/>}
          {user ? RenderUserSettings() : RenderUserAuth()}
          <MobileResponsive>            
            <ButtonMenu onClick={onOpenMenu} />
          </MobileResponsive>
        </Flex>
      </Wrapper>
      <Drawer
        open={openDrawer}
        setOpen={setOpenDrawer}
        userLoading={userLoading}
        userFetched={userFetched}
        user={user}
      />
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  userLoading: selectUserLoading,
  userFetched: selectUserFetched,
  user: selectCurrentUser,
})

export default connect(mapStateToProps)(Header)
