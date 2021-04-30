import styled from "styled-components";

export const BannerContainer = styled.div`
  width : 95vw;  
  height : 400px;
  margin: 2rem auto;      
  @media screen and (min-width : 992px){
    width : 75vw;
    height: 600px;    
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