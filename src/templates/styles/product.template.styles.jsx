import styled from "styled-components"

export const ProductOverviewContainer = styled.div`  
  display : flex; 
  flex-direction : column ; 
  width : 95vw; 
  margin: 2rem auto;
  background-color : ${({theme}) => theme ?  theme.card : "var(--card)"};
  padding : 0.75rem;
  border-radius : 0.5rem;
  @media screen and (min-width: 992px){
    display : grid ; 
    grid-template-columns : 1.2fr 2fr;
    grid-gap : 1rem;
  }
`

export const Box = styled.section`
  width : 95vw;
  margin : 2rem auto;
  background-color :  ${({theme}) => theme ? theme.card : "var(--card)"};
  padding : 0.75rem;
  border-radius : 0.5rem;
`