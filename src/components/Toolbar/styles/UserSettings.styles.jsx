import styled from "styled-components";

export const Wrapper = styled.div`
  position : relative;      
  z-index : 10;
`

export const AvatarContainer = styled.div`
  width : 2rem;
  height: 100%;
  & img{
    width : 100%; 
    height : 100%; 
    border-radius : 50%;
  };
  cursor: pointer;
`

export const UserOverview = styled.div`
  display : flex;
  align-items : center;
`

export const Dropdown = styled.div`
  width : 320px;
  position : absolute;
  top : 100%;
  right: -1rem;    
  display : ${({show}) => show ? "block" : "none"};
  background-color: ${({theme}) => theme.card};
  border : 1px solid ${({theme}) => theme.border};
  border-radius : 0.5rem;
  box-shadow : 0 2px 10px ${({theme})=> theme.border};
`