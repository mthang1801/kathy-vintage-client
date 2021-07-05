import React, { useState, useEffect } from "react"
import { useLanguage } from "../../locales"
import {
  AuthFormContainer,
  FormHeader,
  Title,
  SubTitle,
  FormGroups,
  ErrorMessage,
  SuccessMessage,
  ButtonSubmit,
} from "./styles/AuthForm.styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import GoogleRecaptcha from "./GoogleRecaptcha"
import { restoreAccount } from "../../redux/user/user.actions"
import { FcCheckmark } from "react-icons/fc"
import { useTheme } from "../../theme"
import { CircularProgress } from "@material-ui/core"
const emailPattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const RestoreAccount = () => {
  const {
    translation: {
      auth: { restoreAccountForm },
    },
  } = useLanguage()
  const { theme } = useTheme()
  const [emailValue, setEmailValue] = useState("")
  const [disabled, setDisabled] = useState(true)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [captchaValue, setCaptchaValue] = useState(null)
  const handleChangeGoogleRecaptcha = value => {
    if (value) {
      setCaptchaValue(value)
    }
  }
  const onChangeEmail = e => {
    setEmailValue(e.target.value)
  }

  useEffect(() => {
    if (captchaValue) {
      if (emailPattern.test(emailValue)) {
        return setDisabled(false)
      }
      return setDisabled(true)
    }
    setDisabled(true)
  }, [emailValue, captchaValue])

  const onRestoreAccount = async () => {
    if (emailPattern.test(emailValue)) {
      try {
        setLoading(true)
        await restoreAccount(emailValue)
        setSuccess(true)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
        setEmailValue("")
      }
    }
  }
  return (
    <AuthFormContainer onSubmit={e => e.preventDefault()} theme={theme}>
      {success ? (
        <>
          <FormHeader>
            <Title>
              <FcCheckmark />
            </Title>
          </FormHeader>
          <SuccessMessage>
            {restoreAccountForm.restoreSuccessText}
          </SuccessMessage>
        </>
      ) : (
        <>
          <FormHeader>
            <Title>{restoreAccountForm.title}</Title>
            <SubTitle>{restoreAccountForm.subTitle}</SubTitle>
          </FormHeader>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <FormGroups>
            <TextField
              label="Email"
              type="email"
              value={emailValue}
              size="small"
              variant="outlined"
              autoComplete={true}
              autoFocus={true}
              onChange={onChangeEmail}
              disabled={loading}
            />
            <GoogleRecaptcha onChange={handleChangeGoogleRecaptcha} />
            <ButtonSubmit
              onClick={onRestoreAccount}
              type="button"
              disabled={disabled || loading}
            >
              <span>{restoreAccountForm.restoreButton}</span>
              {loading && <CircularProgress />}
            </ButtonSubmit>
          </FormGroups>
        </>
      )}
    </AuthFormContainer>
  )
}

export default RestoreAccount
