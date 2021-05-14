import React from "react"
import Toolbar from "../components/Toolbar/Toolbar"
import NavigationBar from "../components/Navigation/NavigationBar"
import Footer from "../components/Footer/Footer"
import { Container, MainContent, Header } from "./styles/Layout.styles"
import {useTheme} from "../theme"
const Layout = ({ children }) => {
  const {theme} = useTheme();
  return (
    <Container>
      <Header theme={theme}>
        <Toolbar />
        <NavigationBar />
      </Header>

      <MainContent>{children}</MainContent>
      <Footer />
    </Container>
  )
}

export default Layout
