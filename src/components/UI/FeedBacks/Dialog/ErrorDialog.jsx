import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import WarningIcon from "@material-ui/icons/Warning"
import useLanguage from "../../../Global/useLanguage"
import { ContentContainer } from "./styles/ErrorDialog.styles"
import DialogActions from "@material-ui/core/DialogActions"

export default function ErrorDialog({ content, onClickCloseError }) {
  const { i18n, lang } = useLanguage()
  const { dialog } = i18n.store.data[lang].translation
  return (
    <>
      <Dialog
        open={!!content}
        aria-labelledby="loading-dialog-title"
        aria-describedby="loading-dialog-description"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogContent>
          <DialogContentText id="loading-dialog-description">
            <ContentContainer>
              <span>
                <WarningIcon />
              </span>

              <span>{content}</span>
            </ContentContainer>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickCloseError} color="secondary">
            {dialog.close}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
