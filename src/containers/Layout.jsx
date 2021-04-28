import React from 'react'
import Header from "../components/Header/Header"
import Navigation from "../components/Navigation/Navigation"
const Layout = ({children}) => {
  return (
    <>
     <Header/> 
     <Navigation/>
    </>
  )
}

export default Layout
