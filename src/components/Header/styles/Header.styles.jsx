import styled from "styled-components";

export const Wrapper = styled.header`
  width : 100%; 
  height: 65px;
  display : flex;
  background-color : lightblue;
  align-items :center;
  padding: 0.75rem 1.5rem;
  @media screen and (min-width : 768px){
    height : 80px;
    padding : 0.75rem 3rem;
  }
  @media screen and (min-width : 992px){
    padding : 0.75rem 4rem;
  }
`

export const BrandLogo = styled.img`    
  max-width : 5rem;      
  @media screen and (min-width : 768px){
    max-width : 8rem;
  }
  @media screen and (min-width : 992px){
    max-width : 10rem;
  }
`

export const SearchContainer = styled.div`
  flex:  1 ; 
  width : 50vw;
  margin-left : 0.5rem;    
`