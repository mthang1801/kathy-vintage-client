import React from "react"
import App from "./src/app/App"
import theme from "./src/theme/theme"
import {ThemeProvider} from "theme-ui"
import "./src/i18n"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./src/fonts/index.css"
export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <App>{element}</App>
  </ThemeProvider>
)
