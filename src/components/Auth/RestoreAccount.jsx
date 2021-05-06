import React, { useState, useEffect } from "react"
import useLanguage from "../Global/useLanguage"
import {
  AuthFormContainer,
  FormHeader,
  Title,
  SubTitle,
  FormGroups,
  ErrorMessage,
  SuccessMessage
} from "./styles/AuthForm.styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import GoogleRecaptcha from "./GoogleRecaptcha"
import { restoreAccount } from "../../redux/user/user.actions"
import {FcCheckmark} from "react-icons/fc"
const emailPattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const RestoreAccount = () => {
  const { i18n, lang } = useLanguage()
  const { restoreAccountForm } = i18n.store.data[lang].translation.auth
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
    <AuthFormContainer onSubmit={e => e.preventDefault()}>
      {success ? (
        <>
          <FormHeader>
            <Title><FcCheckmark/></Title>
          </FormHeader>
          <SuccessMessage>{restoreAccountForm.restoreSuccessText}</SuccessMessage>
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
            />
            <GoogleRecaptcha onChange={handleChangeGoogleRecaptcha} />
            <Button
              onClick={onRestoreAccount}
              type="button"
              disabled={disabled}
              color="primary"
              variant="contained"
            >
              {restoreAccountForm.restoreButton}
            </Button>
          </FormGroups>
        </>
      )}
    </AuthFormContainer>
  )
}

export default RestoreAccount
