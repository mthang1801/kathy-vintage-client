import styled from "styled-components"

export const ContentContainer = styled.div`
  width: 95vw;
  margin: 2rem auto;
  display: block;
  & > * {
    margin-bottom : 1rem;
    & > *:not(:last-child){
      margin-bottom : 1rem;
    }
  }
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 1.5fr;
    grid-gap: 1rem;
  }
  @media screen and (min-width: 992px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 3fr 1.25fr;
  }
`
export const Wrapper = styled.div`
  padding : 0.75rem;
  border : 1px solid ${({theme}) => theme ? theme.border : "var(--border)"};
  border-radius : 0.5rem;
  background : ${({theme}) => theme ? theme.card : "var(--card)"};
  & > *:not(:last-child){
    margin-bottom : 1rem;
  }
`
export const Title = styled.h3`
  margin : 0;
  font-size : 1.25rem;
  margin-bottom : 1rem;
`
