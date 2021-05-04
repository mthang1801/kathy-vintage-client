import React, { useState, useCallback } from "react"
import {
  Wrapper,
  SearchContainer,
  BrandLogo,
  Responsive,
  Flex,
  MobileResponsive,
} from "./styles/Header.styles"
import Logo from "../../images/brandlogo.png"
import { Link, useLocation } from "@reach/router"
import {
  selectCurrentUser,
  selectUserFetched,
  selectUserLoading,
} from "../../redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import Search from "./Search"
import { useTheme } from "../../theme"
import { Button } from "@material-ui/core"
import useLanguage from "../Global/useLanguage"
import ButtonMenu from "../Controls/ButtonMenu"
import Cart from "../Cart/Cart"
import Drawer from "../Drawer/Drawer"
import { navigate } from "gatsby"
import UserSettings from "./UserSettings"
const Header = ({ userLoading, userFetched, user }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const { i18n, lang } = useLanguage()
  const { auth } = i18n.store.data[lang].translation
  const { theme } = useTheme()
  const { pathname } = useLocation()
  const onOpenMenu = useCallback(() => {
    setOpenDrawer(true)
  }, [])
  const signInPattern = /^\/auth\/?(signin)?$/
  const signUpPattern = /^\/auth\/signup\/?$/

  const RenderUserSettings = (
    <Responsive>
      <UserSettings user={user} />
    </Responsive>
  )
  const RenderUserAuth = (
    <>
      {userLoading ||
        (!userFetched && (
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
        ))}
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
          <Responsive>
            <Cart />
          </Responsive>
          {user ? RenderUserSettings : RenderUserAuth}

          <MobileResponsive>
            <Cart />
            <ButtonMenu onClick={onOpenMenu} />
          </MobileResponsive>
        </Flex>
      </Wrapper>
      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  userLoading: selectUserLoading,
  selectUserFetched: selectUserFetched,
  user: selectCurrentUser,
})

export default connect(mapStateToProps)(Header)
