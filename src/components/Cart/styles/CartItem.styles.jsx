import styled from "styled-components";
import {Link} from "gatsby"
export const Wrapper = styled(Link)`
  width : 100% ;
  padding : 0.75rem;
  display : flex;
  flex-wrap : nowrap;  
  text-decoration : none ; 
  color : inherit;
  align-items : flex-start;
  &:hover{
    background-color : ${({theme}) => theme.hover.background};
  }  
`

export const AvatarContainer = styled.div`
  width : 3rem;
  height : 3rem; 
  & img{
    width : 100%; 
    height : 100%;
  }
`

export const ProductContent = styled.div`
  flex : 1;     
  margin-left : 0.5rem;  
  font-size :0.95rem;
`

export const ProductName = styled.h4`
  font-weight : bold; 
  font-size : 0.9rem;
  text-transform : capitalize ;     
  overflow : hidden ;
  margin : 0;
  text-align : left;
` 

export const ProductInfo = styled.div`  
  margin : 0.75rem 0;
  display : flex;
  align-items : center;
  & > *:not(:first-child){
    margin-left : 0.6rem;
  }
`

export const ProductQuantityControl = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  flex : 1;      
  margin: 0 0.5rem;

`

export const ButtonQuantity = styled.button`
  outline : none; 
  border : none ; 
  background : none ;
  cursor:  pointer;
  transition : all 0.5s;   
  &:hover{
    transform : scale(1.2);
  }
`

export const DeleteProduct = styled.div`
  width : 3rem;
  text-align : center;
  & svg{
    font-size : 1.2rem;
  }
`