import styled from "styled-components"
export const Wrapper =styled.div`
  padding : 0.5rem;
  background : ${({theme}) => theme.card}; 
  border : 2px solid var(--green-2);
  border-radius : 0.5rem;
  & > p{
    margin: 0.25rem 0;
  }
`

export const Link = styled.span`
  color : var(--indigo-2);
  cursor : pointer;
  &:hover{
    color : var(--indigo-3);
  }
`