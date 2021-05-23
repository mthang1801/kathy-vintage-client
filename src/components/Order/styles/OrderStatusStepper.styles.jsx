import styled from "styled-components";

export const Wrapper = styled.div`
  .MuiStepLabel-label{
    display : flex;
    flex-direction : column; 
    align-items : center;
    font-size : 0.6rem;
    @media screen and (min-width: 768px){
      font-size : 0.8rem;
    }
    @media screen and (min-width: 992px){
      font-size : 0.9rem;
    }
  }
`