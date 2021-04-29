import styled from "styled-components";

export const BannerContainer = styled.div`
  width : 100vw;  
  padding: 1rem 7rem;
  height: 50rem;  
  margin : 0rem auto; 
  display : flex;
  flex-direction : column;
  @media screen and (min-width : 992px){
    display : grid; 
    grid-template-columns : 1fr 3fr;    
    height : 25rem;
    justify-content : space-between;
  }
`

export const CarouselSide = styled.div`
  width : 100%;
  height: 100%;
  overflow : hidden ;
  margin : 1rem auto;
  z-index: 0;
  & img{
    width : 100%; 
    height :100%;
    object-fit: cover;
  }
  @media screen and (min-width : 992px){
    width : 80%;
    height :100%;    
    margin : 0 auto;
  }
`

export const SingleImageSide = styled.div`
  width : 100%; 
  height: 100%; 
  overflow : hidden ;
  margin : 2rem auto;
  & img {
    width : 100%;  
    height: 100%;   
    object-fit: cover;
  }
  @media screen and (min-width : 992px){
    width : 38%;
    height : 100%;
    margin : 0;
  }
`