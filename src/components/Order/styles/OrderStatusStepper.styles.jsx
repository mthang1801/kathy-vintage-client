import styled from "styled-components";

export const Wrapper = styled.div`
  .MuiStepLabel-label{
    display : flex;
    flex-direction : column; 
    
    font-size : 0.9rem;    
    color : ${({theme}) => theme.text} !important;
    @media screen and (min-width: 768px){
      align-items : center;
    }
  }
  .MuiStepper-root{
    background : ${({theme}) => theme.background};
    margin-bottom: 2rem;
  }
  .MuiStepLabel-root{
    align-items : flex-start; 
    @media screen and (min-width: 768px){
      align-items : center;
    }
  }
`

export const Processing = styled.span`  
  opacity : 0.3;
`

export const Processed = styled.span`
  color : var(--green-1);
`