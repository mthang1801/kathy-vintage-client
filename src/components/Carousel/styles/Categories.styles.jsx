import React from "react"
import styled from "styled-components"
import { Link } from "@reach/router"
export const CategoriesSliderContainer = styled.div`
  width: 90vw;
  margin: 4rem auto;
  text-align : center;
  @media screen and (min-width : 992px){
    text-align : left;
  }
  .slick-slide.slick-active > div{    
      width : 99%;    
  }
`

export const Caption = styled.div`
  font-weight: bold;
  font-size: 2em;
  text-transform: uppercase;
  margin: 1rem auto;
`

export const CategoryItem = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  color: inherit;
  height: 5rem;  
  border: 1px solid ${({ theme }) => theme.border};
  margin: 3px 0;
  transition : var(--mainTransition);
  cursor: pointer;
  &:hover{    
    transform : scale(1.01);
    background-color : ${({theme}) => theme.hover.background};
  }
`

export const ImageContainer = styled.div`
  width: 2rem;
  height: 2rem;
  & img {
    width: 100%;
    height: 100%;
  }
`

export const CategoryImage = styled.img`
  display: inline-block;
  margin: auto;
  max-width: 250px;
  max-height: 300px;
  width: 100%;
  height: 100%;
`

export const CategoryName = styled.div`
  font-weight: bold;
  text-transform: uppercase;
  margin: 0.5rem auto;
`

export const SampleNextArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "gray" }}
      onClick={onClick}
    />
  )
}

export const SamplePrevArrow = props => {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "gray" }}
      onClick={onClick}
    />
  )
}
