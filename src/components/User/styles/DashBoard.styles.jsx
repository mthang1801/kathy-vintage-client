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
  height : 60px;
  display  :flex;
  align-items : center;
  justify-content : ${({justify}) => justify || "flex-start"};
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
  max-width : 400px; 
  margin: 2rem;
  .MuiFormControl-root:not(:last-child){
    margin-bottom : 1rem;
  }
  text-align : center;
`

export const AvatarContainer = styled.div`
  width : 2.5rem;
  height : 2.5rem;
  & img{
    width : 100%; 
    height : 100%;
    border-radius : 50%;
  }
`

export const ErrorMessage = styled.div`
  color : var(--red-1);
  font-weight : bold;   
  margin : 1rem 0;
`

export const ButtonSubmit = styled.button`
  outline : none ;
  border : none; 
  cursor : pointer; 
  background-color : var(--indigo-1);
  color : var(--white);
  padding : 1rem 1.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.3rem;
  font-size : 1rem;
  &:hover{
    background-color : var(--indigo-3);
  }
  &:disabled{
    background-color : var(--indigo-1);
    opacity : 0.4;
  } 
`