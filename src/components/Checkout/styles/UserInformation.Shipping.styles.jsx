import styled from "styled-components";

export const Wrapper = styled.div`
  width : 100%; 
  max-width : 600px;  
  border : 2px dashed var(--green-1);
  padding : 1rem; 
  border-radius : 0.5rem;
  background-color : ${({theme}) => theme ? theme?.card : "var(--card)"};
`

export const UserName = styled.h4`
  font-size : 1rem; 
  font-weight : bold ; 
  margin : 0;
`

export const UserInfomationControls = styled.div`
  display : flex; 
  & > button:not(:first-child){
    margin-left : 1rem;
  }
  & button{
    text-transform : initial;
  }
`