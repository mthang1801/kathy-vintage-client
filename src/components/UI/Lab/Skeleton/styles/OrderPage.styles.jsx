import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ userPage }) => (userPage ? '100%' : '95vw')};
  margin: 2rem ${({ userPage }) => (userPage ? '2rem' : 'auto')};
  @media screen and (min-width: 992px) {
    width: ${({ userPage }) => !userPage && '90vw'};
  }
  & > *:not(:first-child) {
    margin-bottom: 2rem;
  }
  .MuiSkeleton-root {
    max-width: ${({ userPage }) => (userPage ? '600px' : '800px')};
    margin: ${({ userPage }) => !userPage && 'auto'};
    width: 100%;
    height: 4.5rem;
  }
`;
