import React, { useState } from "react"
import Drawer from "@material-ui/core/Drawer"
import CssBaseline from "@material-ui/core/CssBaseline"
import List from "@material-ui/core/List"
import { useTheme } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import Button from "@material-ui/core/Button"
import Backdrop from "@material-ui/core/Backdrop"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import ExpandMore from "@material-ui/icons/ExpandMore"
import SettingDialog from "../Setting/SettingDialog"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { useStyles, Image, Auth } from "./styles/Drawer.styles"
import { Link } from "@reach/router"
import Logo from "../../images/brandlogo.png"
import CartButton from "../Controls/CartButton"
import useLanguage from "../Global/useLanguage"
import DrawerPortfoliosDropdown from "../Dropdown/DrawerPortfoliosDropdown"
import { Scrollbars } from "react-custom-scrollbars"
import { navigate } from "gatsby"
import UserOverview from "./UserOverview"
import { signInPattern, signUpPattern } from "../../utils/auth"
import { useLocation } from "@reach/router"
function PersistentDrawerLeft({
  open,
  setOpen,
  userLoading,
  userFetched,
  user,
}) {
  const [openPortfolio, setOpenPortfolio] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const classes = useStyles()
  const theme = useTheme()
  const { pathname } = useLocation()
  const handleDrawerClose = () => {
    setOpen(false)
    onTogglePortfolios(false)
  }
  const { i18n, lang } = useLanguage()
  const { auth, navigations } = i18n.store.data[lang].translation
  const navigationsArr = Object.keys(navigations).map(
    navigation => navigations[navigation]
  )
  const onClickMenu = id => {
    if (id.toLowerCase() === "setting") {
      setOpenDialog(true)
    }
  }
  const onTogglePortfolios = () => {
    setOpenPortfolio(prevState => !prevState)
  }

  const RenderUserOverview = () => <UserOverview user={user} />
  const RenderUserAuth = () => (
    <>
      {(userFetched || !userLoading) && (
        <Auth>
          {!signInPattern.test(pathname) && (
            <Button
              color="primary"
              onClick={() => {
                navigate("/auth", { state: { from: pathname } })
                handleDrawerClose()
              }}
            >
              {auth.login}
            </Button>
          )}
          {!signUpPattern.test(pathname) && (
            <Button
              color="secondary"
              onClick={() => {
                navigate("/auth/signup", { state: { from: pathname } })
                handleDrawerClose()
              }}
            >
              {auth.register}
            </Button>
          )}
        </Auth>
      )}
    </>
  )
  return (
    <>
      <SettingDialog open={openDialog} setOpen={setOpenDialog} />
      <div className={classes.root}>
        <CssBaseline />
        <Backdrop
          className={classes.backdrop}
          open={open}
          onClick={handleDrawerClose}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Scrollbars
            autoHide
            autoHideTimeout={1000}
            autoHideDuration={200}
            autoHeightMin={0}
            autoHeightMax={200}
          >
            <div className={classes.drawerHeader}>
              <Link to="/" onClick={handleDrawerClose}>
                <Image src={Logo} alt="logo" />
              </Link>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "ltr" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <CartButton />
            {user ? RenderUserOverview() : RenderUserAuth()}

            <List>
              {navigationsArr.map(navigation => (
                <>
                  <ListItem
                    className={classes.listItem}
                    button
                    key={navigation.id}
                    onClick={() => {
                      handleDrawerClose();
                      onClickMenu(navigation.id)
                    }}
                  >
                    <ListItemIcon className={classes.itemIcon}>
                      {navigation.icon}
                    </ListItemIcon>
                    <ListItemText primary={navigation.name} />
                    {navigation.name.toLowerCase() === "shop" && (
                      <ListItemIcon
                        className={`${classes.itemIcon} ${classes.dropdownButton}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onTogglePortfolios();                          
                        }}
                      >
                        <ExpandMore />
                      </ListItemIcon>
                    )}
                  </ListItem>
                  {navigation.name.toLowerCase() === "shop" && (
                    <DrawerPortfoliosDropdown open={openPortfolio} handleDrawerClose={handleDrawerClose}/>
                  )}
                </>
              ))}
            </List>
          </Scrollbars>
        </Drawer>
      </div>
    </>
  )
}

export default PersistentDrawerLeft
