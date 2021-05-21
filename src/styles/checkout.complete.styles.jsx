import styled from "styled-components"

export const Wrapper = styled.div`
  border: 2px solid var(--blue-1);
  background : ${({theme}) => theme.card};
  padding : 0.75rem;
  border-radius : 0.5rem;  
`

export const ImageContainer = styled.div`
  text-align: center;
  svg{
    font-size : 5rem;
    color : var(--green-1);
  }
`