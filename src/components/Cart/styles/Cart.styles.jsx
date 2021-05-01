import styled from "styled-components";
import {Link} from "@reach/router"
export const Wrapper = styled(Link)`
  position : relative;    
  cursor: pointer;
  color : inherit;  
`

export const CartIcon = styled.div`
  font-size : 1.75rem;
  display : flex;
`

export const CartNumber = styled.div`
  position : absolute;
  bottom : 1rem ;
  left: 1rem;
  width : 1.25rem;
  height : 1.25rem;
  display : flex;
  align-items: center;
  justify-content : center;
  border-radius : 50%;
  background-color : #ffff00;
  color : #000;
`