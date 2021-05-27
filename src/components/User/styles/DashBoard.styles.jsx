import styled from "styled-components";

export const Wrapper = styled.div`
  width : 100%; 
  height: 100vh;
  background-color : ${({theme}) => theme.dashboard.background}; 
  color : ${({theme}) => theme.dashboard.color};
  .MuiListItemIcon-root {
    font-size : 1.25rem;
    min-width : 40px;
    color : ${({theme}) => theme.dashboard.color};
  }
  & button{
    color : ${({theme}) => theme.dashboard.color};
  }
`

export const Header = styled.div`
  width : 100%; 
  height : 60px;
  display  :flex;
  align-items : center;
  padding  : 0 0.5rem;
`
export const Button = styled.button`
  width : 2.25rem;
  height : 2.25rem;
  display : flex;
  align-items : center;
  justify-content : center;
  border : none ; 
  outline : none; 
  cursor : pointer;  
  font-size : 1.25rem;
  padding : 0.5rem;
  background : none;   
  &:hover{
    background-color: #ededed;
    svg{
      fill : #060717;
    }
    
    border-radius : ${({rounded}) => rounded && "50%"} ;
  }
`

export const Title = styled.h3`
  margin : 0 1rem;
  text-transform :capitalize; 
`

export const Content = styled.div`
  padding: 1rem;   
  label, input {
    color : ${({theme}) => theme.dashboard.color2};
  }
  input:disabled{
    color : ${({theme}) => theme.dashboard.color2};
    opacity : 0.3;
  }
`

export const Form = styled.div`
  width : 100%; 
  max-width : 600px; 
  .MuiFormControl-root:not(:last-child){
    margin-bottom : 1rem;
  }
`