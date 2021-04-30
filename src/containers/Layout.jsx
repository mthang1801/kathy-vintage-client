import React from 'react'
import Header from "../components/Header/Header"
import NavigationBar from "../components/Navigation/NavigationBar"
import Footer from "../components/Footer/Footer"
const Layout = ({children}) => {
  return (
    <>
     <Header/> 
     <NavigationBar/>
     <div>{children}</div>
     <Footer/>
    </>
  )
}

export default Layout
