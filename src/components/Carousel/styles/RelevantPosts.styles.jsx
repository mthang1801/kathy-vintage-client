import styled from 'styled-components';

export const Wrapper = styled.div`
  .slick-track {
    & > * {
      margin: 0 0.25rem;
    }
    height: 18rem;
  }
`;

export const ProductContainer = styled.div`
  position: relative;
  border: 1px solid black;
  & a {
    position: unset;
    border: none;
  }
`;
