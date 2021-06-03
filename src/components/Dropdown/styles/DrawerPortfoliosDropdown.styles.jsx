import styled from "styled-components"
import { makeStyles } from "@material-ui/core"
import { drawerWidth } from "../../Navigation/Drawer/styles/Drawer.styles"
export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  accordionSummary: {
    display: "flex",
    alignItems: "center",
    content: {
      alignItems: "center",
    },
  },
  accordion: {
    margin: 0,
    padding: 0,
  },
  accordionDetails: {
    flexDirection: "column",
  },
}))

export const MobileWrapper = styled.section`
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  height: ${({ open }) => (open ? "auto" : 0)};
  .MuiAccordionSummary-root {
    padding: 0;
    display: flex;
    align-items: center;
  }
  .MuiAccordionSummary-content {
    margin: 0;
  }
  @media screen and (min-width: 500px) {
    display: none;
  }
`

export const TabletWrapper = styled.section`
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  height: ${({ open }) => (open ? "auto" : 0)};
  .MuiAccordionSummary-root {
    padding: 0;
    display: flex;
    align-items: center;
  }
  .MuiAccordionSummary-content {
    margin: 0;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`

export const ListItem = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 1.6rem;
  flex-wrap: nowrap;
  align-items: center;
  cursor: pointer;
  position : relative;
  &:hover {
    background-color: var(--light-gray-1);
  }
`

export const ListItemContainer = styled.div`
  flex:  1;
  display : flex;
  align-items : center;
`

export const ListItemImage = styled.div`
  width: 1.75rem;
  height: 1.75rem;
`

export const ListItemText = styled.div`
  margin-left: 0.5rem;  
`

export const ListItemIcon = styled.div`
  margin-left: auto;
`

export const ViewPort = styled.div`
  display: block;
  position: relative;
  width: 100%;
  @media screen and (min-width: 992px) {
    display: none;
  }
`

export const CategoriesList = styled.div`
  position: fixed;
  left: ${drawerWidth}px;
  top: ${({ y, numberOfItems }) =>
   typeof window !=="undefined" && window.innerHeight - y - numberOfItems * 16 < 0 && y < numberOfItems * 16
      ? 0
      : `${y - ((numberOfItems)* 16)}px`};
  width: ${drawerWidth}px;
  background-color: white;
  overflow: auto;
  height: auto;
`
