import React, { useState, useEffect } from "react"
import { GlobalStyles } from "../styles/GlobalStyles.jsx"
import {useTheme} from "../theme"
import {createStructuredSelector} from "reselect"
import {checkUserSession} from "../redux/user/user.actions";
import {connect} from "react-redux"
import FacebookMessenger from "../components/Messenger/FacebookMessenger"
const App = ({ children, user, checkUserSession }) => {
  const {theme} = useTheme()
  useEffect(() => {
    checkUserSession();
  })
  
  return (
    <>
      <GlobalStyles theme={theme} />
      {children}{" "}
      <FacebookMessenger/>
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  checkUserSession : () => dispatch(checkUserSession())
})

export default connect(null, mapDispatchToProps)(App)