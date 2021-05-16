import styled from "styled-components"

export const CheckoutContainer  = styled.div`
  width : 95vw; 
  margin : 3rem auto;
  display : block;   
  @media screen and (min-width : 768px){
    display : grid ; 
    grid-template-columns : 2fr 1.5fr; 
    grid-gap : 0.5rem;
  }
  @media screen and (min-width : 992px){
    display : grid ; 
    grid-template-columns : 3fr 1.25fr; 
  }
` 
export const CartItems = styled.div`  
  width : 100%;   
`
export const TemporaryInvoiceSide = styled.div`
background-color :yellow;
  width : 100%; 
  height : 5rem;
`