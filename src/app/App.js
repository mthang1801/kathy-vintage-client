import React, { useState, useEffect } from "react"
import { GlobalStyles } from "../styles/GlobalStyles.jsx"
import {useTheme} from "../theme"
import {selectCurrentUser, selectUserError} from "../redux/user/user.selectors"
import {createStructuredSelector} from "reselect"
import {checkUserSession} from "../redux/user/user.actions";
import {connect} from "react-redux"
import FacebookMessenger from "../components/Messenger/FacebookMessenger"
const App = ({ children, user, checkUserSession }) => {
  const {theme} = useTheme()
  useEffect(() => {
    checkUserSession();
  },[])
  if (typeof window === "undefined") return null
  return (
    <>
      <GlobalStyles theme={theme} />
      {children}{" "}
      <FacebookMessenger/>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  user : selectUserError
})

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
