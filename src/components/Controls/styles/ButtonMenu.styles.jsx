import styled from "styled-components"

export const Wrapper = styled.div`
  position : relative;
  display : flex;
  flex-direction : column;
  width : 2rem;
  height : 2rem;  
  padding : 0.2rem 0;
  justify-content : space-around;
  align-items:center;
  border : 1px solid transparent;
  transition : var(--mainTransition);
  cursor : pointer;
  span{
    display :inline-block;
    width : 1.5rem;
    height: 2px;
    background-color : ${({theme}) => theme.text};
  }
  &:hover{
    border: 1px solid var(--gray-1);
    border-radius : 0.2rem;  
    background-color : ${({theme}) => theme.header.background};
  }
`

