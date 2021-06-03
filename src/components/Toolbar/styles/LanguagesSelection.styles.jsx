import styled from "styled-components";

export const Wrapper = styled.div`
  width : 150px;
  display : flex ; 
  align-items : center;
  cursor : pointer;   
  position :relative; 
  box-shadow : var(--lightShadow);
`

export const Text = styled.span`
  margin-right : 0.5rem;
`

export const LanguageDropdownContainer = styled.div`
  position : absolute ; 
  top : 110%;
  left: -10%;  
  width : 150px;  
  display : flex ; 
  flex-direction : column;
  opacity : ${({show}) => show ? 1 : 0 };
  z-index : 400;
  visibility : ${({show}) => show ? "visible" : "hidden"};
  transition : all 0.25s;
  box-shadow: var(--lightShadow);
  border : 1px solid ${({theme}) => theme ? theme.border : "var(--border)"}; 
  background : ${({theme}) => theme ? theme.background : "var(--background)"}; 
  border-radius : 0.5rem;
  overflow : hidden; 
`

export const RowInline = styled.div`
  display : flex ; 
  align-items : center;    
  padding : .4rem 1rem;  
  &:not(:last-child){
    border-bottom : 1px solid #7fad39;
  }
  &:hover{
    background-color : ${({theme}) => theme ? theme.background : "var(--background)"}; 
    color : var(--green-1);
  }
`