import styled from "styled-components";

export const SampleMode = styled.span`
  display : inline-block;
  width: 1.5rem;
  height: 1rem;
  background-color: ${({theme}) => theme?  `${theme.colors?.body}` : "white"};
  margin-right: 0.5rem;
  border: 1px solid gray;
  border-radius : 0.25rem;
`