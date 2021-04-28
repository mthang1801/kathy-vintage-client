import styled from "styled-components"
import {config} from "../../../config"
export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`

export const Title = styled.h4`
  text-align: center;
  text-transform: uppercase;
  margin: auto;
`

export const List = styled.div`
  position: absolute;
  top: 100%;
  left: 10%;
  width: 280px;
  height: auto;
  border: 1px solid ${({ theme }) => theme?.colors?.border};  
`

export const ListItem = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 0.5rem 2rem;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.hover.background};
    color: ${({ theme }) => theme.colors.hover.color};
  }
  background-color: ${({ theme, active }) =>
    active ? theme.colors.navigation.active.background : "unset"};
  color: ${({ theme, active }) =>
    active ? theme.colors.navigation.active.color : "unset"};
`

export const ListItemIcon = styled.span`
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;
`

export const ListItemText = styled.span`
  text-transform: capitalize;
  margin-left: 0.5rem;
  font-weight: 500;
`

export const CategoriesContainer = styled.div`
  position: absolute;
  width: 280px;
  left: 90%;
  top: ${({ y }) => `${Math.max(0, y - (config.headerHeight + config.navigationHeight))}px`};
`

export const ProductGroupsContainer = styled.div`
  position: absolute;
  width: 280px;
  left:90%;  
  top: ${({y}) => `${y}px`};
`

export const ListItemExpand = styled.div`
  display : flex;
  margin-left: auto;
`