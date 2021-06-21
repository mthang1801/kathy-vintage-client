import styled from "styled-components"

export const Wrapper = styled.div`
  border: 2px solid var(--blue-1);
  background: ${({ theme }) => (theme ? theme.card : "var(--card)")};
  padding: 0.75rem;
  border-radius: 0.5rem;
`

export const ImageContainer = styled.div`
  text-align: center;
  svg {
    font-size: 5rem;
    color: var(--green-1);
  }
`

export const ButtonGroup = styled.div`
  margin: 1rem auto;
  display: flex;
  justify-content: center;
`
