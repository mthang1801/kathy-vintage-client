import styled from "styled-components"
import { Link } from "@reach/router"
export const List = styled.section`
  border: 1px solid var(--gray-1);
  display: flex;
  flex-direction: column;
  background-color :white;
  color: inherit;
  &:hover {
    color: inherit;
  }  
`

export const ListItemText = styled.span`
  text-transform : capitalize;
`

export const ListItem = styled(Link)`
  color: inherit;
  position : relative;  
  text-decoration: none;
  padding: 0.5rem 1rem;
  width: 200px;
  &:hover {
    & > ${ListItemText}{
      color: var(--gray-1);      
    }    
    background: white;
  }
`

export const ProductGroupsContainer = styled.div`
  position : absolute;
  top : 0; 
  left : 100%;
  width : 200px;  
  overflow : hidden;  
`