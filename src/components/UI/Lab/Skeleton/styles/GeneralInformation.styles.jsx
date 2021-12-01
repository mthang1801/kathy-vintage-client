import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ fullScreen }) => (fullScreen ? '800px' : '500px')};
  margin: ${({ fullScreen }) => (fullScreen ? '2rem auto' : '2rem')};
  .MuiSkeleton-root {
    width: 100%;
    height: 4.5rem;
  }
`;
