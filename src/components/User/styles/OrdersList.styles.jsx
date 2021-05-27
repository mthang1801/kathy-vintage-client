import styled from "styled-components"

export const ContentContainer = styled.div`
  width: 100%;
  margin: 2rem auto;    
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`
export const Title = styled.h2`
  margin : 2rem auto;
  text-align : center;
  text-transform : uppercase ; 
  font-size : 2rem;
`

export const ReadMoreContainer = styled.div`
  margin : 2rem auto;
  text-align : center;
  text-transform : capitalize; 
`

export const ReadMoreText = styled.span`
  cursor : pointer;
  color : var(--indigo-1);
  &:hover{
    color : var(--indigo-3);
  }
`