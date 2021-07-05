import React, { useState, useEffect } from "react"
import {
  Header,
  Title,
  ErrorMessage,
  Form,
  ButtonSubmit,
} from "./styles/DashBoard.styles"
import Divider from "@material-ui/core/Divider"
import TextField from "@material-ui/core/TextField"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import InputAdornment from "@material-ui/core/InputAdornment"
import IconButton from "@material-ui/core/IconButton"
import Visibility from "@material-ui/icons/Visibility"
import VisibilityOff from "@material-ui/icons/VisibilityOff"
import POLICY from "../../constants/policy"
import CircularProgress from "@material-ui/core/CircularProgress"
import AlertDialog from "../UI/FeedBacks/Dialog/AlertDialog"
import UpdatePasswordSuccessDialog from "../UI/FeedBacks/Dialog/UpdatePasswordSuccessDialog"
import { updatePassword } from "../../database/user"
const ChangePassword = ({ lang, title, user, passwordTranslation }) => {
  const [loading, setLoading] = useState(false)
  const [openAlertDialog, setOpenAlertDialog] = useState(false)
  const [openChangeSuccess, setOpenChangeSuccess] = useState(false)

  const isProvider =
    user?.providerId === "google.com" || user?.providerId === "facebook.com"
  const [errorMessage, setErrorMessage] = useState(
    isProvider ? passwordTranslation.errorProvider : ""
  )
  const initialValues = {
    oldPassword: "",
    showOldPassword: false,
    newPassword: "",
    showNewPassword: false,
    confirmNewPassword: "",
    showConfirmNewPassword: false,
  }
  const [values, setValues] = useState(initialValues)
  const handleChange = e => {
    const { name, value } = e.target

    setValues(prevState => ({ ...prevState, [name]: value }))
  }

  const handleMouseDownPassword = e => {
    e.preventDefault()
  }

  useEffect(() => {
    let timer
    if (errorMessage && !isProvider) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        setErrorMessage("")
      }, 10000)
    }
    return () => clearTimeout(timer)
  }, [errorMessage, loading])

  const onCheckPasswordValidation = e => {
    if (values.newPassword !== values.confirmNewPassword) {
      return setErrorMessage(passwordTranslation.errorConfirmPassword)
    }
    if (!POLICY.authenticate.password.test(values.newPassword)) {
      return setErrorMessage(passwordTranslation.errorInvalidPassword)
    }

    setLoading(true)
    setOpenAlertDialog(true)
  }
  const onSubmitForm = async () => {
    try {
      await updatePassword(values.oldPassword, values.newPassword)
      setLoading(false)
      setOpenChangeSuccess(true)
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setErrorMessage(passwordTranslation.errorOldPassword)
      } else {
        setErrorMessage(passwordTranslation.errorServer)
      }

      setLoading(false)
    }
  }
  return (
    <>
      <AlertDialog
        open={openAlertDialog}
        setOpen={setOpenAlertDialog}
        title={passwordTranslation.confirmDialog.title}
        content={passwordTranslation.confirmDialog.content}
        onAgree={onSubmitForm}
      />
      <UpdatePasswordSuccessDialog open={openChangeSuccess} />
      <Form onSubmit={e => e.preventDefault()}>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        {!isProvider && (
          <>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                {passwordTranslation.oldPassword}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showOldPassword ? "text" : "password"}
                value={values.oldPassword}
                name="oldPassword"
                readOnly={loading}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      name="oldPassword"
                      tabIndex={-1}
                      onClick={() =>
                        setValues(prevState => ({
                          ...prevState,
                          showOldPassword: !prevState.showOldPassword,
                        }))
                      }
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showOldPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={lang === "vi" ? 90 : 100}
              />
            </FormControl>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                {passwordTranslation.newPassword}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showNewPassword ? "text" : "password"}
                value={values.newPassword}
                name="newPassword"
                readOnly={loading}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      tabIndex={-1}
                      aria-label="toggle password visibility"
                      name="oldPassword"
                      onClick={() =>
                        setValues(prevState => ({
                          ...prevState,
                          showNewPassword: !prevState.showNewPassword,
                        }))
                      }
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showNewPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={lang === "vi" ? 100 : 110}
              />
            </FormControl>
            <FormControl variant="outlined" size="small" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">
                {passwordTranslation.confirmNewPassword}
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showConfirmNewPassword ? "text" : "password"}
                value={values.confirmNewPassword}
                name="confirmNewPassword"
                onChange={handleChange}
                readOnly={loading}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      name="oldPassword"
                      onClick={() =>
                        setValues(prevState => ({
                          ...prevState,
                          showConfirmNewPassword: !prevState.showConfirmNewPassword,
                        }))
                      }
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showConfirmNewPassword ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={170}
              />
            </FormControl>

            <ButtonSubmit
              type="button"
              onClick={onCheckPasswordValidation}
              disabled={
                loading ||
                (!values.oldPassword &&
                  !values.newPassword &&
                  !values.confirmNewPassword)
              }
            >
              {passwordTranslation.buttonConfirm}
              {loading && (
                <CircularProgress
                  style={{
                    width: "1rem",
                    height: "1rem",
                    color: "white",
                    marginLeft: "0.5rem",
                  }}
                />
              )}
            </ButtonSubmit>
          </>
        )}
      </Form>
    </>
  )
}

export default ChangePassword
