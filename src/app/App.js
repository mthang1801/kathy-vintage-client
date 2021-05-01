import React, { useState, useEffect } from "react"
import { GlobalStyles } from "../styles/GlobalStyles.jsx"
import {useTheme} from "../theme"

const App = ({ children }) => {
  const {theme, setColorMode, colorMode} = useTheme()
  console.log(theme, colorMode)
  if (typeof window === "undefined") return null
  return (
    <>
      <GlobalStyles theme={theme} />
      {children}{" "}
    </>
  )
}

export default App
