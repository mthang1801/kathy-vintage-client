import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"
export const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))
export const Wrapper = styled.div`
  .MuiButtonBase-root {
    margin-left: auto;
  }
  .MuiToolbar-root {
    background: ${({ theme }) =>
      theme
        ? theme?.dashboard?.background
        : "var(--dashboard-background)"} !important;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DashBoardContainer = styled.div``
