import styled from 'styled-components';

export const ContentContainer = styled.div`
  width: 95vw;
  margin: 2rem auto;
  @media screen and (min-width: 992px) {
    width: 90vw;
  }
  & > *:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  border: 1px solid ${({ theme }) => (theme ? theme.border : 'var(--border)')};
  padding: 1rem 2rem;
  background: ${({ theme }) =>
    theme ? theme?.form?.background : 'var(--form-background)'};
`;
