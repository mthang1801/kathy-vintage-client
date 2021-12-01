import styled from 'styled-components';

export const Wrapper = styled.section`
  background: ${({ theme }) => (theme ? theme.card : 'var(--card)')};
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  padding: 0.75rem;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) =>
      theme ? theme?.hover?.background : 'var(--hover-background)'};
  }
`;

export const ImageContainer = styled.div`
  width: 4rem;
  transition: all 2s;
  &:hover {
    transform: scale(1.5);
  }
  & img {
    width: 4rem;
  }
  @media screen and (min-width: 768px) {
    width: 5rem;
    & img {
      width: 5rem;
    }
  }
  @media screen and (min-width: 768px) {
    width: 7rem;
    & img {
      width: 7rem;
    }
  }
`;

export const ProductInformationOverview = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 1rem;
  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    align-items: flex-start;
    & > *:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;
export const ProductName = styled.p`
  flex: 1;
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    max-width: 60%;
    font-size: 1rem;
  }
`;

export const ProductPriceAndQuantity = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
export const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;

export const ProductPriceAfterDiscount = styled.p`
  font-size: 0.85rem;
  font-weight: 600;
  margin: 0;
  color: var(--blue-3);
`;

export const ProductPriceOrigin = styled.div`
  display: none;
  align-items: center;
  & span:first-child {
    opacity: 0.6;
    text-decoration: line-through;
    border-right: 1px solid;
    font-size: 0.85rem;
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
    padding-right: 0.5rem;
  }
  & span:last-child {
    font-weight: 600;
    font-size: 0.85rem;
    padding-left: 0.5rem;
    color: var(--red-3);
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    font-size: 1rem;
  }
`;

export const ProductQuantity = styled.div`
  color: var(--cyan-3);
  font-weight: bold;
  font-size: 0.85rem;
  @media screen and (min-width: 768px) {
    margin-right: 1rem;
    font-size: 1rem;
  }
  text-align: center;
`;

export const ProductTotalPrice = styled.div`
  color: var(--red-3);
  font-weight: bold;
  font-size: 0.85rem;
  @media screen and (min-width: 768px) {
    margin-left: 1rem;
    font-size: 1rem;
  }

  text-align: center;
`;
