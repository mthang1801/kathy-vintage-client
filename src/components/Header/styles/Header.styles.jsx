import styled from "styled-components";

export const Wrapper = styled.header`
  width : 100%; 
  height: 65px;
  display : flex;
  background : ${({theme}) => theme.colors.header.background}; 
  border-bottom:1px solid ${({theme}) => theme.colors.border} ;  
  padding: 0.75rem;
  @media screen and (min-width : 768px){
    height : 80px;
    padding : 0.75rem 3rem;
  }
  @media screen and (min-width : 992px){
    padding : 0.75rem 4rem;
  }
`

export const Flex = styled.div`
  display : flex;
  justify-content : flex-start;
  &:last-child{
    justify-content: flex-end
  }
  align-items: center;
  width : 85vw; 
  padding : 0 1rem;
  &:last-child{
    width : 15vw;
  }
  @media screen and (min-width: 768px){
    width : 60vw;
    &:last-child{
      width : 40vw;
    }
  }
  @media screen and (min-width: 992px){
    width : 50vw;
    &:last-child{
      width : 50vw;
    }
  }
`


export const BrandLogo = styled.img`    
  max-width : 3rem;      
  @media screen and (min-width : 768px){
    max-width : 6rem;
  }
  @media screen and (min-width : 992px){
    max-width : 8rem;
  }  
`

export const SearchContainer = styled.div`  
  width : 80%;
  margin-left : 0.5rem;    
  
`

export const Responsive = styled.div`
  button{
    font-weight: bold;
  }  
  display : none ; 
  @media screen and (min-width: 992px){
    display : flex; 
  }
`

export const MobileResponsive = styled.div`
  display : block;
  @media screen and (min-width : 992px){
    display : none;
  }
`