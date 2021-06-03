import styled , {keyframes} from "styled-components"
import {Link}  from "gatsby";
const CartAlertAnimation = keyframes`
  0%{
    opacity : 0 ;
    visibility : hidden ; 
  }
  100%{
    opacity : 1;
    visibility : visible;
  }
`

export const Wrapper = styled.div`
  width : 18rem;
  padding : 0.5rem 1rem;
  border-radius : 0.5rem;
  border : 2px solid var(--blue-1);
  box-shadow : ${({theme}) => theme ? theme?.boxShadow : "var(--boxShadow)"};
  background-color : ${({theme}) => theme ? theme?.card : "var(--card)"};  
  animation: ${CartAlertAnimation} 0.5s;
  font-size : 0.9rem;  
`

export const ButtonCheckout = styled(Link)`
  display : block;
  text-transform : capitalize; 
  text-decoration : none;     
  outline : none ; 
  border: none ; 
  cursor  : pointer;  
  background : linear-gradient(to right bottom, var(--red-1), var(--red-2));
  border-radius : 0.5rem;
  padding : 0.75rem;
  max-width : 240px;
  color : #fff;
  margin : 1rem auto 0.5rem auto;
  font-size  :0.85rem;
  &:hover{
    background : var(--red-3);
  }
`