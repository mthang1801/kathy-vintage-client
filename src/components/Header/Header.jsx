import React from 'react'
import {Wrapper,SearchContainer, BrandLogo} from "./styles/Header.styles"
import Logo from "../../images/brandlogo.png"
import {Link} from "@reach/router"
import Search from "./Search"
const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <BrandLogo src={Logo} alt="logo" />
      </Link>
      <SearchContainer>
        <Search/>
      </SearchContainer>
    </Wrapper>
  )
}

export default Header
