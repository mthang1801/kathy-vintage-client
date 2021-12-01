import styled from 'styled-components';

export const InputGroup = styled.div`
  width: 100%;
  position: relative;
  margin: 1rem auto;
  text-align: left;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.7rem 2rem 0.7rem 0.7rem;
  outline: none;
  border: none;
  color: black;
  font-size: 1.1em;
  border: 2px solid #0d47a1;
  border-radius: 6px;
  letter-spacing: ${({ type }) => (type === 'password' ? '0.3em' : '0.05em')};
  border-color: ${({ border }) =>
    border === 'error' ? 'red' : border === 'success' ? 'green' : '#0d47a1'};
  background-color: #e3f2fd;
  &:disabled {
    background-color: #dcdcdc;
    color: #fafafa;
  }
`;

export const Label = styled.label`
  position: absolute;
  font-size: ${({ shrinkLabel }) => (shrinkLabel ? '0.8em' : '0.9em')};
  color: #404040;
  left: ${({ shrinkLabel }) => (shrinkLabel ? '7px' : '15px')};
  top: ${({ shrinkLabel }) => (shrinkLabel ? '-10px' : '15px')};
  padding: 0 8px;
  transition: all 0.25s ease-out;
  background-color: ${({ shrinkLabel }) =>
    shrinkLabel ? 'white' : 'transparent'};
  ${Input}:focus ~ & {
    left: 7px;
    top: -10px;
    font-size: 0.8em;
    background: linear-gradient(to bottom, white 40%, #e3f2fd 100%);
  }
  cursor: auto;
`;

export const TextSuccess = styled.span`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%) scale(1.5);
  color: green;
`;

export const TextError = styled.span`
  color: red;
  font-size: 0.9em;
`;

export const RadioGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  width: 100%;
  font-size: 1rem;
`;

export const RadioTitle = styled.div`
  margin-right: 2rem;
`;
export const RadioLabel = styled.label`
  display: flex;
  &:not(first-child) {
    margin-left: 1rem;
  }
`;
