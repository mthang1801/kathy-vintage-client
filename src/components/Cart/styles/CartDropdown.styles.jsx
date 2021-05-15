import styled from "styled-components"

export const Wrapper = styled.div`
  outline : none ; 
  border: none ; 
  width : 25rem;
  height: 28rem;
  background-color : ${({theme}) => theme.card};
  border-radius : 0.5rem;
  box-shadow : 0 2px 10px ${({theme}) => theme.border};
  border : 1px solid ${({theme}) => theme.border};
  display : flex; 
  flex-direction : column; 
`

export const Title = styled.h3`
  text-align : center;
  text-transform : uppercase ; 
  font-size : 1.3rem;
  padding : 0.5rem 1rem;
  border-bottom : 1px solid ${({theme}) => theme.border};
  margin : 0;
`

export const CartItems = styled.section`
  width : 100%; 
  flex: 1 ;
  overflow : auto;
  text-align : left;
`

export const EmptyItem = styled.h4`
  text-transform : capitalize ; 
  font-size : 1.2rem;
  flex: 1;
  display : flex;
  align-items : center;
  justify-content : center;
`