import React, { useEffect, useRef, useState } from "react"
import { CarouselBannerWrapper } from "./styles/Banners.styles"
import { Link } from "gatsby"
import Slider from "react-slick"
import { CustomArrowNext, CustomArrowPrev } from "./CustomArrowSlider"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import {trackCustomEvent} from "gatsby-plugin-google-analytics"
const CarouselBanner = () => {
  
  const carouselRef = useRef(null)  
  
  const { imagesCarousel } = useStaticQuery(QUERY_IMAGES_CAROUSEL)
  const images = imagesCarousel.edges.map(({ node }) => node)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomArrowNext />,
    prevArrow: <CustomArrowPrev />,
    autoplaySpeed: 4000,
    autoplay: true,
    dots : false , 
    fade : true ,    
  }

  return (
    <CarouselBannerWrapper ref={carouselRef}>
      <Slider {...settings}>
        {images.map(image => (
          <Link to={"/"} key={image.name} onCLick={(e) => {
            e.preventDefault();
            trackCustomEvent({
              action : "Click", 
              category : "navigate"
            })
          }}>
            <Image fluid={image.childImageSharp.fluid} alt={image.name}/>
          </Link>
        ))}
      </Slider>
    </CarouselBannerWrapper>
  )
}

const QUERY_IMAGES_CAROUSEL = graphql`
  query {
    imagesCarousel: allFile(
      filter: { sourceInstanceName: { eq: "images-carousel" } }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid (quality : 100){
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default CarouselBanner
