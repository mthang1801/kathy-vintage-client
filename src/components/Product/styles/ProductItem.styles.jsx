import styled from "styled-components"
import {Link} from "gatsby"
export const Wrapper = styled(Link)`
  position :relative;
  border: 1px solid ${({theme}) => theme.border};  
  border-radius : 5px;  
  text-decoration : none;
  color : inherit;  
  transition : var(--mainTransition);
  &:hover{
    transform : translateY(-3px);
    box-shadow : ${({theme}) => theme.boxShadow};
  }
`

export const ImageContainer = styled.div`
  position :relative;
  width : 100% ;
  height: 10rem;
  flex: 1 ;
  & > div{
    width : 100%; 
    height :100%;
  }
`

export const ProductText = styled.div`
  height : 6rem;
  display : grid; 
  grid-template-rows: 3fr; 
  grid-template-columns : 1fr;  
  padding : 0.25rem;
`

export const ProductName = styled.div`
  grid-row : 1 / span 2 ; 
  overflow: hidden;
  text-overflow: ellipsis;
`

export const ProductPrice = styled.div`
  grid-row : 3 / span 1 ;
  font-weight : 600;
  font-size : 1.2rem;
`

export const DiscountBrand = styled.span`
  z-index : 1;
  top : 0;
  right : 0;  
  position : absolute;  
  text-align : center;
  background-color : red;
  color : #ffea00 ;
  padding : 0.25rem 0.5rem;
`