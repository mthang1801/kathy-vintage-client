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
  box-shadow : ${({theme}) => theme.boxShadow};
  background-color : ${({theme}) => theme.card};  
  animation: ${CartAlertAnimation} 1.25s;
  font-size : 1rem;  
`

export const ButtonCheckout = styled(Link)`
  text-transform : capitalize; 
  text-decoration : none;     
  outline : none ; 
  border: none ; 
  cursor  : pointer;
  background : linear-gradient(to right bottom, var(--red-1), var(--red-2));
  border-radius : 0.5rem;
  padding : 0.75rem 1rem;
  color : #fff;
  margin : 0.5rem auto;
  &:hover{
    background : var(--red-3);
  }
`