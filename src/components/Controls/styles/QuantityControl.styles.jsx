import styled from "styled-components"

export const InputGroup = styled.div`
  display : flex;
  align-items : center;
  & > *{
    height : 2rem;
    width : 2rem; 
  }  

`

export const Button = styled.button`
  background-color : ${({theme}) => theme ? theme.card : "var(--card)"};
  outline : none ; 
  border: none ; 
  cursor:  pointer;
  width : 2rem;  
  border: 1px solid var(--light-gray-2);
  display : flex;
  align-items :center;
  justify-content : center;
  &:first-child{
    border-top-left-radius : 5px;
    border-bottom-left-radius : 5px;
    border-right : none; 
  }
  &:last-child{
    border-top-right-radius : 5px;
    border-bottom-right-radius : 5px;
    border-left : none;
  }
  &:disabled{
    background-color : var(--light-gray-2);
  }
`

export const Input = styled.input`  
  outline : none ; 
  border : none;
  text-align : center;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  }
  &[type=number]{
    -moz-appearance: textfield;
  }
  border: 1px solid var(--light-gray-2);
  &:focus{
    border : 1.5px solid var(--cyan-1);
    box-shadow : ${({theme}) => theme  ? theme.boxShadow : "var(--boxShadow)" };
  }
  transition : all 0.5s linear;
`