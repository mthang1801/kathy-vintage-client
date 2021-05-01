import React from "react"
import App from "./src/app/App"
import "./src/i18n"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./src/fonts/index.css"
import { ThemeProvider } from "./src/theme"
import { theme } from "./src/theme/theme"
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <App>{element}</App>
  </ThemeProvider>
)
