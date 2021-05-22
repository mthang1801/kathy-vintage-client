import styled from "styled-components"

export const ContentContainer = styled.div`
  width: 95vw;
  margin: 2rem auto;
  @media screen and (min-width: 992px) {
    width: 90vw;
  }
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