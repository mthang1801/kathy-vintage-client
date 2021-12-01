import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90vw;
  margin: 3rem auto;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: ${({ theme }) => (theme ? theme.card : 'var(--card)')};
  text-align: center;
  & > *:not(:last-child) {
    margin-bottom: 1.5rem;
  }
  @media screen and (min-width: 992px) {
    height: 600px;
  }
`;
export const Icon = styled.div`
  svg {
    font-size: 10rem;
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 120px;
  }
  @media screen and (min-width: 768px) {
    img {
      width: 180px;
    }
  }
  @media screen and (min-width: 992px) {
    img {
      width: 240px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 1rem;
  @media screen and (min-width: 992px) {
    font-size: 1.25rem;
  }
`;

export const Button = styled.button`
  outline: none;
  border: none;
  background: #3949ab;
  border-radius: 1.5rem;
  padding: 1rem 2rem;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.5s all ease-out;
  position: relative;
  &:hover,
  &:active {
    transform: translateY(-3px);
    background-color: #1a237e;
  }
`;
