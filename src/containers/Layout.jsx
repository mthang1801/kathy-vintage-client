import React from 'react'
import Header from "../components/Header/Header"
import NavigationBar from "../components/Navigation/NavigationBar"
import Footer from "../components/Footer/Footer"
import {Container, MainContent} from "./styles/Latout.styles"
const Layout = ({children}) => {
  return (
    <Container>
     <Header/> 
     <NavigationBar/>
     <MainContent>{children}</MainContent>
     <Footer/>
    </Container>
  )
}

export default Layout
