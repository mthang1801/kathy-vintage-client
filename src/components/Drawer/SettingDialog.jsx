import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {SettingContents, ContentItem, Wrapper} from "./styles/SettingDialog.styles"
import useLanguage from "../Global/useLanguage"
import SettingLanguages from "./SettingLanguages"
import SettingColorMode from "./SettingColorMode"
export default function AlertDialog({open, setOpen}) {
  const handleClose = () => {
    setOpen(false);
  };
  const {i18n, lang} = useLanguage()
  const {setting} = i18n.store.data[lang].translation
  
  return (
    <Wrapper>     
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="md"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        class             
      >
        <DialogTitle id="alert-dialog-title">{setting.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <SettingContents>
              <ContentItem>
                <div>{setting.contents.locales} : </div>
                <div><SettingLanguages/></div>
              </ContentItem>
              <ContentItem>
                <div>{setting.contents.mode} : </div>
                <div><SettingColorMode/></div>
              </ContentItem>
            </SettingContents>
          </DialogContentText>
        </DialogContent>
        <DialogActions>         
          <Button onClick={handleClose} color="primary" autoFocus style={{fontWeight:"bold"}}>
            {setting.close}
          </Button>
        </DialogActions>
      </Dialog>
    </Wrapper>
  );
}