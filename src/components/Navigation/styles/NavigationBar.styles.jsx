import styled from "styled-components"
import { config } from "../../../config"
import { Link } from "@reach/router"
export const Wrapper = styled.nav`
  width: 100%;
  background: ${({ theme }) => theme.colors.navigation.background};
  padding: 0 5rem;
  display : none; 
  @media screen and (min-width: 992px){
    display : block;
  }
`

export const List = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
`
export const ListItemText = styled.span`
  text-align: center;
`

export const Setting = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  align-items: space-around;
  padding: 0.4rem 1rem;
  cursor: pointer;
  z-index: 1;
  // &:hover {
   
  //   color: var(--blue-1);
  //   & img {
  //     filter: invert(49%) sepia(85%) saturate(1822%) hue-rotate(159deg)
  //       brightness(91%) contrast(103%);
  //   }
  // }
  ${({ active }) =>
    active &&
    `    color : var(--blue-1);
  & img{
    filter: invert(49%) sepia(85%) saturate(1822%) hue-rotate(159deg) brightness(91%) contrast(103%);
  }`}
`

export const ListItemIcon = styled.div`
  width: 1.2rem;
  height: 1.2rem;

  & img,
  & svg {
    width: 100%;
    height: 100%;
  }
`

export const ListItem = styled(Link)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  position: relative;
  padding: 0.4rem 1rem;
  z-index: 1;
  // &:hover {
  //   & ${ListItemText}, ${ListItemIcon} {
  //     color: ${({theme}) => theme.colors.hover.color};
  //   }    
    
  //   & img {
  //     filter: invert(49%) sepia(85%) saturate(1822%) hue-rotate(159deg)
  //       brightness(91%) contrast(103%);
  //   }
  // }
  ${({ active }) =>
    active &&
    `    color : var(--blue-1);
  & img{
    filter: invert(49%) sepia(85%) saturate(1822%) hue-rotate(159deg) brightness(91%) contrast(103%);
  }`}
`



export const CategoriesContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
`
