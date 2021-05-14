import React from "react"
import Toolbar from "../components/Toolbar/Toolbar"
import NavigationBar from "../components/Navigation/NavigationBar"
import Footer from "../components/Footer/Footer"
import { Container, MainContent, Header } from "./styles/Layout.styles"

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <Toolbar />
        <NavigationBar />
      </Header>

      <MainContent>{children}</MainContent>
      <Footer />
    </Container>
  )
}

export default Layout
