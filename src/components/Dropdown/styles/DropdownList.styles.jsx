import styled from "styled-components"
import { Link } from "gatsby"
export const List = styled.section`
  border: 1px solid ${({ theme }) => (theme ? theme.border : "var(--border)")};
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => (theme ? theme.card : "var(--card)")};
  color: inherit;
  &:hover {
    color: inherit;
  }
`

export const ListItemText = styled.span`
  text-transform: capitalize;
`

export const ListItem = styled(Link)`
  color: inherit;
  position: relative;
  text-decoration: none;
  padding: 0.5rem 1rem;
  width: 200px;
  &:hover {
    & > ${ListItemText} {
      color: ${({ theme }) => (theme ? theme.hover.text : "var(--hover-text)")};
    }
    background: ${({ theme }) => (theme ? theme.body : "var(--body)")};
  }
`

export const ProductGroupsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 100%;
  width: 200px;
  overflow: hidden;
`
