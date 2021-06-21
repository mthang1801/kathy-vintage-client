import styled from "styled-components"
import { Link } from "gatsby"
export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const ListItem = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  color: inherit;
  &:hover {
    color: ${({ theme }) =>
      theme ? theme?.hover?.background : "var(--hover-background)"};
  }
`

export const Setting = styled.div`
  display: flex;
  text-decoration: none;
  align-items: center;
  cursor: pointer;
  color: inherit;
  &:hover {
    color: ${({ theme }) =>
      theme ? theme?.hover?.background : "var(--hover-background)"};
  }
`

export const ListItemIcon = styled.span`
  display: flex;
  align-items: center;
  & svg {
    font-size: 1.2rem;
  }
`

export const ListItemText = styled.span`
  text-transform: uppercase;
  margin-left: 0.5rem;
  font-weight: 600;
`
