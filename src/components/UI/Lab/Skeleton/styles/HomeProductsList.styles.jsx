import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid ${({ theme }) => (theme ? theme.card : 'var(--card)')};
  border-radius: 5px;
  padding: 0.5rem;
`;
