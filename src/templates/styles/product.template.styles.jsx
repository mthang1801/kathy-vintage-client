import styled from "styled-components"

export const ProductOverviewContainer = styled.div`  
  display : flex; 
  flex-direction : column ; 
  width : 90vw; 
  margin: 2rem auto;
  @media screen and (min-width: 768px){
    display : grid ; 
    grid-template-columns : repeat(2, 1fr);
    grid-gap : 1rem;
  }
`

export const ProductImages = styled.div`
  width : 100% ;   
`

export const PresentImage = styled.div`
  text-align :center;
`

export const CarouselImages = styled.div`
  width : 25rem;
  margin : 1.5rem auto;
`

export const ProductInfo = styled.div`
  background-color : blue;
`