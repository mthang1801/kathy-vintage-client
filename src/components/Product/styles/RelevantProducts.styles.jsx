import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 1.25rem;
  margin: 0.5rem 0 1.25rem 0;
  text-transform: uppercase;
`;

export const RelevantProductsContainer = styled.div`
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
`;
