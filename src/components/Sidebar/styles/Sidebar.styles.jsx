import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 2;
  &:not(:first-child) {
    margin: 1rem 0;
  }
  & a {
    color: inherit;
    &:hover {
      color: var(--blue-3);
    }
  }
  position: relative;
  .MuiFormControlLabel-root {
    &:hover {
      color: var(--blue-3);
    }
  }
`

export const Title = styled.h4`
  font-size: 1rem;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 0.4rem;
  font-weight: bolder;
`

export const ReadMoreText = styled.div`
  display: block;
  position: relative;
  margin: auto;
  color: var(--blue-1);
  cursor: pointer;
  &:hover {
    color: var(--blue-3);
  }
  margin-top: 1rem;
`

export const BlurSection = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 0;
  width: 100%;
  padding: 1.5rem 0;
  text-align: center;
  margin: 0;
  background-image: linear-gradient(
    to bottom,
    transparent,
    ${({ theme }) => (theme ? theme.body : "var(--body)")}
  );
`

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & button {
    height: 2rem;
  }
  & > * {
    display: flex;
    align-items: center;
  }
  & div {
    & > *:not(:first-child) {
      margin-left: 0.5rem;
    }
  }
`

export const Input = styled.input`
  display: flex;
  width: 4.5rem;
  height: 2rem;
  padding: 0.4rem;
  font-size: 0.9rem;
  border-radius: 0.2rem;
  border: 1px solid ${({ theme }) => (theme ? theme.border : "var(--border)")};
  background: ${({ theme }) =>
    theme ? theme.background : "var(--background)"};
  outline: none;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: textfield;
  }
`
