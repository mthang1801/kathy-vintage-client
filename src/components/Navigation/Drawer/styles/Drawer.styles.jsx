import { makeStyles } from "@material-ui/core/styles"
import styled from "styled-components";
export const drawerWidth = 280
export const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    overflow : "unset"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer - 1,
    color: '#fff',
  },  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  itemIcon : {
    transform : "scale(1.75)",
    marginRight : "0.75rem",
    width : "auto"    ,
    minWidth: "unset",
  },
  dropdownButton : {
    transform : "scale(1.2)",
    marginLeft : "auto",
  },
 
}))


export const Image = styled.img`
  width : auto;
  max-width : 6rem;
`

export const Auth = styled.div`
  display : flex;
  justify-content : space-around;  
  & * {
    font-weight: bold;
  }
`