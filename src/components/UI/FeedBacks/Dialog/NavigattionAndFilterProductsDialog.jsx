import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import {ChildrenContainer} from "./styles/NavigattionAndFilterProductsDialog.styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import CloseIcon from "@material-ui/icons/Close"
import Slide from "@material-ui/core/Slide"

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function FullScreenDialog({ open, setOpen, children, templateTranslation }) {
  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Toolbar>         
          <Typography variant="h6" className={classes.title}>
            {templateTranslation.dialog.title}
          </Typography>
          <Button autoFocus color="inherit" onClick={handleClose}>
            {templateTranslation.dialog.closeButton}
          </Button>
        </Toolbar>
      </AppBar>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </Dialog>
  )
}
