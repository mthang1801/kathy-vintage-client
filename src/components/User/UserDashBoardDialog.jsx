import React from 'react';
import {
  useStyles,
  Wrapper,
  DashBoardContainer,
} from './styles/UserDashBoardDialog.styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Slide from '@material-ui/core/Slide';
import { useTheme } from '../../theme';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const UserDashBoardDialog = ({ open, setOpen, children }) => {
  const classes = useStyles();
  const { theme } = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper theme={theme}>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <ArrowBackIosRoundedIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div style={{ marginTop: '3rem' }}>{children}</div>
      </Dialog>
    </Wrapper>
  );
};

export default UserDashBoardDialog;
