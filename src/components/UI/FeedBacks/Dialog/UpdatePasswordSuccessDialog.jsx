import React, { useState, useEffect } from "react"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline"
import { useLanguage } from "../../../../locales"
import { ContentContainer } from "./styles/UpdatePasswordSuccessDialog.styles"
import { connect } from "react-redux"
import { signOutUser } from "../../../../redux/user/user.actions"

const UpdatePasswordSuccessDialog = ({ open, signOutUser }) => {
  const {
    translation: {
      user: { password },
    },
  } = useLanguage()
  const [counter, setCounter] = useState(3)
  useEffect(() => {
    let timer
    if (open) {
      timer = setInterval(() => {
        setCounter(prevCounter => prevCounter - 1)
      }, 1000)
      if (counter === 0) {
        clearInterval(timer)
        signOutUser()
      }
    }
    return () => clearInterval(timer)
  }, [open, counter])
  return (
    <>
      <Dialog
        open={open}
        aria-labelledby="loading-dialog-title"
        aria-describedby="loading-dialog-description"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogContent>
          <DialogContentText id="loading-dialog-description">
            <ContentContainer>
              <span>
                <CheckCircleOutlineIcon />
              </span>
              <span>{password.updatePasswordSuccess}</span>
              <span
                dangerouslySetInnerHTML={{
                  __html: password.countTimeToLogout(counter),
                }}
              ></span>
            </ContentContainer>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  )
}
const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(signOutUser()),
})
export default connect(null, mapDispatchToProps)(UpdatePasswordSuccessDialog)
