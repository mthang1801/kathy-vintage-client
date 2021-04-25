import React from "react"
import App from "./src/app/App"
import theme from "./src/theme/theme"
import {ThemeProvider} from "theme-ui"
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <App>{element}</App>
  </ThemeProvider>
)
