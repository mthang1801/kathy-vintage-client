import styled from 'styled-components';

export const Wrapper = styled.div`
  outline: none;
  border: none;
  width: 22rem;
  height: 25rem;
  background-color: ${({ theme }) => (theme ? theme?.card : 'var(--card)')};
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px
    ${({ theme }) => (theme ? theme.border : 'var(--border)')};
  border: 1px solid ${({ theme }) => (theme ? theme.border : 'var(--border)')};
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid
    ${({ theme }) => (theme ? theme.border : 'var(--border)')};
  margin: 0;
`;

export const CartItems = styled.section`
  width: 100%;
  flex: 1;
  overflow: auto;
  text-align: left;
`;

export const EmptyItem = styled.h4`
  text-transform: capitalize;
  font-size: 1.2rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TotalPrice = styled.div`
  text-align: right;
  padding: 0 0.5rem;
  font-size: 1rem;
`;

export const FooterDropdown = styled.div`
  padding: 0.75rem;
  border-top: 1px solid
    ${({ theme }) => (theme ? theme.border : 'var(--border)')};
`;
