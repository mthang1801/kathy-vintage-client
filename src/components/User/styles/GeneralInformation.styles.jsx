import styled from "styled-components";


export const Form = styled.form`
  display : flex;   
  flex-wrap : wrap;
  flex-direction : column;     
  width : 100%; 
  margin : 2rem;
  max-width : 500px;
  .MuiFormControl-root{    
    width : 100%;
    margin : 0; 
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
  margin : 0.5rem;
`

export const ErrorAlert = styled.div`
  font-weight : bold; 
  text-align  :center;
  margin : 0.5rem auto 1.5rem auto;
  color : var(--red-3);
`

export const Flex = styled.div`
  width : 100% ; 
  display : flex;  
  justify-content : center;
  & button:not(:first-child){
    margin-left : 1rem;
  }
`