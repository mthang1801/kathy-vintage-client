import React from "react"
import Slider from "react-slick"
import Image from "gatsby-image"
import { Wrapper, ImageContainer } from "./styles/ProductImages.styles"
import { v4 as uuidv4 } from "uuid"

const ProductImages = ({ images, setActiveImage, activeImage }) => {
  const settings = {          
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: Math.min(4, images.length),
      slidesToScroll: 2,
      arrows : false 
  }
  return (
    <Wrapper>
      <Slider {...settings}>
        {images.map( (image, idx) => (
          <ImageContainer key={uuidv4()} active={activeImage === idx} >
            <img src={`https:${image.file.url}`} onClick={() => setActiveImage(idx)}/>
          </ImageContainer>
        ))}
      </Slider>
    </Wrapper>
  )
}

export default ProductImages
