import React from "react"
import {
  AuthFormContainer,
  FormHeader,
  FormGroups,
  FormActions,
  StyledLink,
  Option,
  FlashForm,
  Title,
  SubTitle,
  ErrorMessage,
} from "./styles/AuthForm.styles"
import Input from "./Input"
import Button from "@material-ui/core/Button"
import useLanguage from "../Global/useLanguage"
import { connect } from "react-redux"
import { signUpUser } from "../../redux/user/user.actions"
import { createStructuredSelector } from "reselect"
import { selectUserError } from "../../redux/user/user.selectors"
const SignUpFormWrapper = ({ error, signUpUser }) => {
  const { i18n, lang } = useLanguage()
  const { signupForm } = i18n.store.data[lang].translation.auth
  const INITIAL_STATE = {
    controls: {
      name: {
        type: "text",
        name: "name",
        valid: false,
        label: signupForm.name,
        validation: {
          required: true,
          minLength: 3,
          maxLength: 50,
        },
        value: "",
        touched: false,
        validationErrors: "",
      },
      gender: {
        type: "radio",
        name: "gender",
        valid: true,
        label: signupForm.gender,
        subFields: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ],
        validation: {
          required: false,
        },
        value: "male",
        touched: false,
        validationErrors: "",
      },
      email: {
        type: "email",
        name: "email",
        label: signupForm.email,
        valid: false,
        validation: {
          required: true,
          isEmail: true,
        },
        value: "",
        touched: false,
        validationErrors: "",
      },
      password: {
        type: "password",
        name: "password",
        valid: false,
        label: signupForm.password,
        validation: {
          required: true,
          minLength: 6,
        },
        value: "",
        touched: false,
        validationErrors: "",
      },
      confirmPassword: {
        type: "password",
        name: "confirmPassword",
        label: signupForm.confirmPassword,
        valid: false,
        validation: {
          required: true,
          minLength: 6,
          match: true,
        },
        value: "",
        touched: false,
        validationErrors: "",
      },
    },
    formIsValid: false,
    loaded: false,
    disabled: true,
  }
  return (
    <SignUpForm
      locales={signupForm}
      error={error}
      signUpUser={signUpUser}
      initialState={INITIAL_STATE}
    />
  )
}

class SignUpForm extends React.Component {
  state = { ...this.props.initialState }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loaded: true })
    }, 1000)
  }

  checkValidity = (value, rules) => {
    let isValid = true
    let errorsMessage = []
    if (rules.required) {
      isValid = value.trim().length && isValid
      if (!isValid) {
        errorsMessage.push(this.props.locales.requiredError)
      }
    }
    if (rules.isEmail) {
      const pattern = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      isValid = pattern.test(value) && isValid
      if (!isValid) {
        errorsMessage.push(this.props.locales.invalidEmail)
      }
    }
    if (rules.minLength) {
      isValid = value.trim().length >= rules.minLength && isValid
      if (!isValid) {
        errorsMessage.push(this.props.locales.invalidMinLength(rules.minLength))
      }
    }
    if (rules.maxLength) {
      isValid = value.trim().length <= rules.maxLength && isValid
      if (!isValid) {
        errorsMessage.push(this.props.locales.invalidMaxLength(rules.maxLength))
      }
    }
    if (rules.match) {
      isValid = value.trim() === this.state.controls.password.value && isValid
      if (!isValid) {
        errorsMessage.push(this.props.locales.confirmPasswordNotMatch)
      }
    }
    return errorsMessage
  }

  handleChange = (e, name) => {
    let updatedControls = { ...this.state.controls }
    if (name === "gender") {      
      return this.setState({
        ...updatedControls,
        [name]: { ...updatedControls[name], value: e.target.value },
      })
    }
    let updatedControlElement = { ...updatedControls[name] }
    updatedControlElement.value = e.target.value
    const checkValid = this.checkValidity(
      e.target.value,
      updatedControlElement.validation
    )
    updatedControlElement.valid = checkValid.length === 0
    updatedControlElement.touched = true
    updatedControlElement.validationErrors = checkValid
    updatedControls[name] = updatedControlElement
    let { email, password, confirmPassword } = updatedControls
    const formIsValid =
      email.valid &&
      updatedControlElement.valid &&
      password.valid &&
      confirmPassword.valid
    this.setState({ controls: updatedControls, formIsValid })
  }

  handleSubmitSignUpForm = e => {
    e.preventDefault()
    if (!this.state.formIsValid) {
      this.setState({ ...this.props.initialState })
      return
    }
    const { name, gender, email, password } = this.state.controls

    this.props.signUpUser(name.value, gender.value, email.value, password.value)
  }

  // handleChangeGoogleRecaptcha = value => {
  //   this.setState({ captcha_value: value, disabled: false })
  //   if (value === null) this.setState({ disabled: true })
  // }

  render() {
    const { formIsValid, loaded, disabled } = this.state
    let formInputArray = []
    Object.keys(this.state.controls).map(controlItem => {
      formInputArray.push(this.state.controls[controlItem])
    })
    console.log(formIsValid)
    const { error, locales } = this.props
    return (
      <AuthFormContainer onSubmit={this.handleSubmitSignUpForm}>
        <FormHeader>
          <Title>{locales.title}</Title>
          <SubTitle>{locales.subTitle}</SubTitle>
        </FormHeader>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FormGroups>
          {formInputArray.map(
            ({
              label,
              name,
              touched,
              type,
              valid,
              validation,
              validationErrors,
              value,
              subFields,
            }) => (
              <Input
                key={name}
                type={type}
                name={name}
                value={value}
                label={label}
                subFields={subFields}
                onChange={e => this.handleChange(e, name)}
                require={validation.required}
                touched={touched}
                valid={valid}
                validationErrors={validationErrors}
              />
            )
          )}
        </FormGroups>
        <Button type="submit" color="primary" variant="outlined" disabled={!formIsValid}>
          Submit
        </Button>
      </AuthFormContainer>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  error: selectUserError,
})

const mapDispatchToProps = dispatch => ({
  signUpUser: (name, gender, email, password) =>
    dispatch(signUpUser(name, gender, email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormWrapper)
