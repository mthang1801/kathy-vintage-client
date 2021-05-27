import styled from "styled-components";

export const Wrapper = styled.button`
  position : relative;    
  cursor: pointer;
  color : inherit;    
  outline : none ; 
  border: none;
  background : transparent;  
`

export const CartIcon = styled.div`
  font-size : 1.75rem;
  display : flex;
`

export const CartNumber = styled.div`
  position : absolute;
  bottom : 1rem ;
  left: 1.5rem;
  width : 1.25rem;
  height : 1.25rem;
  display : flex;
  align-items: center;
  justify-content : center;
  border-radius : 50%;
  background-color : #ffff00;
  color : #000;
`

export const Dropdown = styled.div`
  position : absolute; 
  right : -2rem; 
  top : 115%;
  z-index : 10;
`