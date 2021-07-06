import React from "react"
import styled from "styled-components"

export const CategoriesSliderContainer = styled.div`
  width: 90vw;
  background-color: ${({ theme }) =>
    theme ? theme.card : "var(--card)"} !important;
  border-radius: 1rem;
  padding: 0.75rem 1rem;
  margin: 4rem auto;
  text-align: center;
  @media screen and (min-width: 992px) {
    text-align: left;
  }
  .slick-slide.slick-active > div {
    width: 99%;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin : 0.25rem 0.5rem 1.5rem 0.5rem ;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    margin: 1rem 2.5rem 2rem 2.5rem;
  }
`

export const CategoryItem = styled.div`
  display: flex !important;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  color: inherit;
  height: 5rem;
  margin: 3px 0;
  transition: var(--mainTransition);
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      theme ? theme?.hover?.background : "var(--hover-background)"};
  }
  border-radius: 5px;
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

export const CategoryItemText = styled.span`
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
