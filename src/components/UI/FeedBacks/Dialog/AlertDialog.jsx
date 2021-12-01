import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useLanguage } from '../../../../locales';
export default function AlertDialog({
  open,
  setOpen,
  title,
  content,
  onAgree,
}) {
  const {
    translation: { dialog },
  } = useLanguage();
  const handleClose = () => {
    setOpen(false);
  };

  const onClickAgree = () => {
    onAgree();
    handleClose();
  };

  const onClickDisagree = () => {
    handleClose();
  };
  if (!title || !content || !onAgree) return null;
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography
              gutterBottom
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickDisagree} color="primary">
            {dialog.disagree}
          </Button>
          <Button onClick={onClickAgree} color="secondary">
            {dialog.agree}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
