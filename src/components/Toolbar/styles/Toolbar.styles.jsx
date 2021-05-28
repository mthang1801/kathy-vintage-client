import styled from "styled-components"; 
import {config} from "../../../config"
export const Wrapper = styled.header`
  width : 100%; 
  height: 65px;
  display : grid;
  grid-template-columns: 2.5fr 1fr; 
  background-color : ${({theme}) => theme.card} !important; 
  border-bottom:1px solid ${({theme}) => theme.border};  
  padding: 0.75rem 0.25rem;
  @media screen and (min-width : 768px){
    height : ${config.headerHeight}px;
    padding : 0.75rem 1.5rem;
    grid-template-columns: 3fr 1fr; 
  }
  @media screen and (min-width : 992px){
    padding : 0.75rem 2rem;
    grid-template-columns: 2fr 1fr; 
  }
  @media screen and (min-width : 1200px){
    padding : 0.75rem 2rem;
    grid-template-columns: 3fr 1fr; 
  }
  z-index: 100;
`

export const Flex = styled.div`
  display : flex;
  justify-content : flex-start;
  &:last-child{
    justify-content: flex-end
  }
  align-items: center;  
  padding : 0 1rem;
  
`


export const BrandLogo = styled.img`    
  max-width : 3rem;      
  @media screen and (min-width : 768px){
    max-width : 5rem;
  }
  @media screen and (min-width : 992px){
    max-width : 7rem;
  }  
`

export const SearchContainer = styled.div`  
  width : 70%;
  margin-left : 0.5rem;    
  
`

export const Responsive = styled.div`  
  display : none ; 
  @media screen and (min-width: 992px){
    display : flex;  
    margin : 0 1rem;      
  }
`

export const MobileResponsive = styled.div`
  display : flex;
  align-items : center;
  & > *:not(first-child){
    margin-left: 0.5rem;
  }
  @media screen and (min-width : 992px){
    display : none;
  }
`