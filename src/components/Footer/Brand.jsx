import React from 'react'
import {ImageContainer} from "./styles/Footer.styles"
import {Link} from "gatsby"
const Brand = () => {
  return (
    <ImageContainer>
      <Link to="/"><span>Kathy</span><span>Vintage</span></Link>
    </ImageContainer>
  )
}

export default Brand
