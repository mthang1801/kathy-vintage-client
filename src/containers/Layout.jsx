import React from "react"
import Toolbar from "../components/Toolbar/Toolbar"
import NavigationBar from "../components/Navigation/NavigationBar"
import Footer from "../components/Footer/Footer"
import { Container, MainContent, Header, StepperContainer } from "./styles/Layout.styles"
import {useTheme} from "../theme"
import {useLocation} from "@reach/router"
import Stepper from "../components/Checkout/Stepper"
const Layout = ({ children }) => {
  const {theme} = useTheme();
  const {pathname} = useLocation();
  const stepperMatchPattern = /^\/checkout/
  
  return (
    <Container>
      <Header theme={theme}>
        <Toolbar />
        <NavigationBar />
      </Header>

      <MainContent>
        {stepperMatchPattern.test(pathname) && <StepperContainer><Stepper/></StepperContainer>}
        {children}
      </MainContent>
      <Footer />
    </Container>
  )
}

export default Layout
