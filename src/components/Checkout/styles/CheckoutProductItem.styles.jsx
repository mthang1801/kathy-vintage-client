import styled from "styled-components"

export const Wrapper = styled.section`
  width: 100%;
  background: ${({ theme }) => (theme ? theme.card : "var(--card)")};
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  padding: 0.75rem;
  display: flex;
  align-items: flex-start;
`

export const ImageContainer = styled.div`
  width: 4rem;
  & img {
    width: 4rem;
  }
  @media screen and (min-width: 768px) {
    width: 5rem;
    & img {
      width: 5rem;
    }
  }
  @media screen and (min-width: 992px) {
    width: 7rem;
    & img {
      width: 7rem;
    }
  }
`

export const ProductInformationOverview = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1rem;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
`
export const ProductContent = styled.h4`
  flex: 1;
  margin: 0;
  font-weight: 400;
  margin-bottom: 1rem;
  @media screen and (min-width: 992px) {
    margin-bottom: 0;
    max-width: 80%;
  }
`

export const Grid = styled.div`
  display: grid;
  margin: 0.5rem 0;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
  }
`

export const ProductColorItem = styled.div`
  border: 1px solid ${({ theme }) => (theme ? theme.border : "var(--border)")};
  background: ${({ theme }) =>
    theme ? theme.background : "var(--background)"};
  border-radius: 0.2rem;
  overflow: hidden;
  transition: all 0.5s linear;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
      background : linear-gradient(to right bottom, var(--blue-1) , var(--blue-2) , var(--blue-3));      
      border:  1px solid transparent;
      color : white;
    `}
  padding : 0.5rem;
  text-align: center;
  text-transform: capitalize;
`

export const ProductPriceAndQuantity = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (min-width: 992px) {
    text-align: center;
  }
`

export const ProductPriceAfterDiscount = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: var(--blue-3);
`

export const ProductPriceOrigin = styled.div`
  display: flex;
  align-items: center;
  & span:first-child {
    opacity: 0.6;
    text-decoration: line-through;
    border-right: 1px solid;
    font-size: 0.9rem;
    padding-right: 0.5rem;
  }
  & span:last-child {
    font-weight: 600;
    font-size: 0.85rem;
    padding-left: 0.5rem;
    color: var(--red-3);
  }
`

export const ProductQuantityControls = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: flex-start;
`

export const ProductDelete = styled.div`
  & svg {
    font-size: 1.3rem;
  }
  text-align: center;
  cursor: pointer;
  &:hover {
    color: var(--red-3);
  }
  @media screen and (min-width: 768px) {
    padding: 0.25rem 0.75rem;
  }
`
