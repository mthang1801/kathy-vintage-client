import styled from "styled-components"

export const Wrapper = styled.div`
  width :100%; 
  max-width : 800px;
  margin : 1rem auto;
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

