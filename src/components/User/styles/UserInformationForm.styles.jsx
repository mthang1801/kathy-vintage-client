import styled from "styled-components";


export const Wrapper = styled.form`
  display : flex;   
  flex-wrap : wrap;
  flex-direction : column;   
  margin : auto;  
  .MuiFormControl-root{    
    & input, & select{
      background-color : ${({theme}) => theme.card};        
      &:hover{
        border: ${({theme}) => theme.border};
      }
    }    
    &:not(:last-child){
      margin-bottom : 1.5rem;
    }
  }
  .MuiFormLabel-root{
    color : ${({theme}) => theme.text};
  }
`

export const Title = styled.h4`
  text-align : center;
  text-transform : uppercase ; 
  font-size : 1.2rem;
`