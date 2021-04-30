import styled from "styled-components";

export const CarouselBannerWrapper = styled.div`
  width: 95vw; 
  height: 300px;
  margin : 2rem auto;
  overflow : hidden;  
  @media screen and (min-width: 768px){
    width : 600px;
    height : 350px;
  }
  @media screen and (min-width : 992px){
    width : 800px;
    height: 400px;
  } 
  & *{
    height : 100%;
  }
`;

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ img }) => (img ? `url(${img})` : "")};
  background-color: transparent;
  background-size: cover;
  height : ${({ height }) => (height ? `${height}px` : "100%")};
  align-items: flex-start;
  justify-content: center;
  // padding : ${({ mobileView }) => (mobileView ? "2rem" : "0")} ;
  position: relative;
  z-index: 0;
`;
