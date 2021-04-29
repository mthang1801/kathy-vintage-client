import React from 'react'
import Header from "../components/Header/Header"
import NavigationBar from "../components/Navigation/NavigationBar"
const Layout = ({children}) => {
  return (
    <>
     <Header/> 
     <NavigationBar/>
     <div>{children}</div>
    </>
  )
}

export default Layout
