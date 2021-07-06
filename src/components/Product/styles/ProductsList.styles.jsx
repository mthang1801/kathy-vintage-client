import styled from "styled-components"
import { Link } from "gatsby"
export const Wrapper = styled.section`
  width: 90vw;
  background-color: ${({ theme }) =>
    theme ? theme.card : "var(--card)"} !important;
  border-radius: 1rem;
  padding: 0.75rem 1rem 3rem 1rem;
  margin: 4rem auto;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin : 0.25rem 0.5rem 1.5rem 0.5rem ;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 1rem 2.5rem 1.5rem 2.5rem;
  }
`

export const Title = styled.h3`
  text-align: left;
  font-size: 1.2rem;
  text-transform: uppercase;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`
export const StyledTitle = styled.span`
  font-family: "Bangers", cursive;
  color: #f57f17;
  letter-spacing: 0.2rem;
  font-size: 1.7rem;
`

export const ReadMoreLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #c62828;
  text-decoration: none;
  & > * {
    display: flex;
  }
  & > span {
    margin-right: 0.5rem;
  }
  & svg {
    font-size: 1.2rem;
  }
  margin-top: 1rem;
  @media screen and (min-width: 768px) {
    margin-left: auto;
    margin-top: 0;
  }
`

export const Body = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem 1rem;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media screen and (min-width: 1920px) {
    grid-template-columns: repeat(8, 1fr);
  }
`

export const Footer = styled.div``
