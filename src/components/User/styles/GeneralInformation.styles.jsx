import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 90%;
  margin: 2rem auto;
  max-width: 400px;
  .MuiFormControl-root {
    & * {
      color: ${({ theme }) => (theme ? theme.text : 'var(--text)')} !important;
    }
    width: 100%;
    margin: 0;
    & input,
    & select {
      background-color: ${({ theme }) => (theme ? theme.card : 'var(--card)')};
      border: 1px solid
        ${({ theme }) => (theme ? theme.border : 'var(--border)')};
      border-radius: 3px;
      overflow: hidden;
      border: 1px solid transparent;
      &:hover {
        border: 1px solid ${({ theme }) => (theme ? theme.card : 'var(--card)')};
      }
    }
    input:disabled,
    select:disabled {
      color: ${({ theme }) =>
        theme ? theme?.disabled?.color : 'var(--disabled-color)'} !important;
      background-color: ${({ theme }) =>
        theme ? theme?.disabled?.background : 'var(--disabled-background)'};
    }
    &:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
  .MuiFormLabel-root {
    color: ${({ theme }) => (theme ? theme.text : 'var(--text)')};
  }
  @media screen and (min-width: 768px) {
    margin: 2rem;
  }
  @media screen and (min-width: 992px) {
    max-width: 500px;
  }
`;

export const Title = styled.h4`
  text-align: center;
  text-transform: uppercase;
  font-size: 1.2rem;
  margin: 0.5rem;
`;

export const ErrorAlert = styled.div`
  font-weight: bold;
  text-align: center;
  margin: 0.5rem auto 1.5rem auto;
  color: var(--red-3);
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & button:not(:first-child) {
    margin-left: 1rem;
  }
`;
