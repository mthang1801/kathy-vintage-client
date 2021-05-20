import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import Spinner from "../UI/Spinner"
import useLanguage from "../Global/useLanguage"
import {ContentContainer} from "./styles/LoadingDialog.styles"
import WarningIcon from '@material-ui/icons/Warning';
export default function LoadingDialog({ open }) {
  const {i18n, lang} = useLanguage();
  const {dialog} = i18n.store.data[lang].translation;
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="loading-dialog-title"
        aria-describedby="loading-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="loading-dialog-description">
            <ContentContainer>
            <Spinner/>
            <h4>{dialog.loading}</h4>
            </ContentContainer>
            
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}
