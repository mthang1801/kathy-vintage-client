import styled from "styled-components";

export const Wrapper = styled.div`  
  height: 100vh;
  overflow-y: hidden;
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
  display  : ${({isDialog}) => isDialog ? "none" : "flex"};
  align-items : center;
  justify-content : ${({justify}) => justify || "flex-start"};
  padding  : 0 0.5rem;
  
`
export const Button = styled.button`
  width : 2.75rem;
  height : 2.75rem;
  display : flex;
  align-items : center;
  justify-content : center;
  border : none ; 
  outline : none; 
  cursor : pointer;  
  font-size : 1.25rem;  
  background : none;   
  color : inherit;
  &:hover{
    background-color: ${({theme}) => theme.name === "light" ? "#cdeae9" : "#333356"}  ;
    svg{
      fill : ${({theme}) => theme.name === "light" ? "var(--gray-3)" : "var(--light-gray-3)"};
    }
    
    border-radius : ${({rounded}) => rounded && "50%"} ;
  }
  & svg{
    font-size :1.75rem;
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