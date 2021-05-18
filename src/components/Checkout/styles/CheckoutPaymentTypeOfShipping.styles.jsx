import styled from "styled-components"



export const TypeOfShipping = styled.div`
  background-color : ${({theme}) => theme.background};
  padding : 0.75rem;
  border-radius : 0.5rem;
  @media screen and (min-width : 992px){
    .MuiFormGroup-root{
      flex-direction : row; 
    }
    .MuiFormControlLabel-root:not(:first-child){
      margin-left : 1rem;
    }
  .MuiFormControlLabel-root .MuiTypography-root{
    font-size : 0.9rem;
  }

`