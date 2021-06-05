import React from "react"
import Button from "@material-ui/core/Button"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import LoadingSpinner from "../../Spinners/LoadingSpinner"
import { useLanguage } from "../../../../locales"
import { ContentContainer } from "./styles/LoadingDialog.styles"

export default function LoadingDialog({ open }) {
  const {
    translation: { dialog },
  } = useLanguage()
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
              <LoadingSpinner />
              <h4>{dialog.loading}</h4>
            </ContentContainer>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}
