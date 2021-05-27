import styled from "styled-components"

export const Wrapper = styled.div`
  // width :100%; 
  max-width : 800px;
  margin : 1rem ${({userPage}) => userPage ? "2rem" : "auto"};
  .MuiAccordion-root{
    background-color : ${({theme}) => theme.card};
    color : inherit;    
  }
  .MuiDivider-root{
    background-color : ${({theme}) => theme.border};
  }
  .MuiAccordionSummary-content{
    justify-content : space-between;
  }
  .MuiAccordionDetails-root{
    display : flex; 
    flex-direction: column;
  }
  .MuiGrid-root{
    padding : 0.75rem 1.5rem;    
  }
`

export const Title = styled.h4`
  font-size : 1.1rem;
  font-weight : bold;
  text-align  :center;
  @media screen and (min-width : 768px){
    text-align : left;
  }
`

export const OrderStatus = styled.div`
  display : flex; 
  align-items : center;  
  & > *:not(:first-child){
    margin-left : 0.5rem;
  }
  & svg{
    font-size : 1rem;
  }
  font-size : 0.8rem;
  text-transform : capitalize ; 
  color : ${({status}) => status === "active" ? "var(--blue-1)" : status === "completed" ? "var(--green-1)" : "var(--red-1)"};
`

export const OrderLabel = styled.div`
  display : flex; 
  flex-direction : column;  
  & > *:not(:first-child){
    margin-top : 0.5rem;
  }
  @media screen and (min-width: 768px){
    flex-direction : row;
    & > *:not(:first-child){
      margin-left : 0.5rem;
      margin-top : 0;
    }
  }
`