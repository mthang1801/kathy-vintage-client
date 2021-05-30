import React from "react"
import {
  AuthFormContainer,
  FormHeader,
  FormGroups,
  FormActions,
  Option,
  StyledLink,
  Title,
  SubTitle,
  ErrorMessage,
  SocialLoginButtons,
  ButtonSubmit
} from "./styles/AuthForm.styles"
import Input from "./Input"
import CircularProgress from '@material-ui/core/CircularProgress';
import useLanguage from "../Global/useLanguage"
import { connect } from "react-redux"
import {
  signUpUser,
  signInWithGoogle,
  signInWithFacebook,
  clearUserError,
} from "../../redux/user/user.actions"
import { createStructuredSelector } from "reselect"
import { selectUserError, selectUserLoading } from "../../redux/user/user.selectors"
import GoogleRecaptcha from "./GoogleRecaptcha"
import FacebookLoginButton from "./FacebookLoginButton"
import GoogleLoginButton from "./GoogleLoginButton"
import {trackCustomEvent} from "gatsby-plugin-google-analytics"
import {useTheme} from "../../theme"
import POLICY from "../../constants/policy"
const SignUpFormWrapper = ({
  error,
  signUpUser,
  signInWithGoogle,
  signInWithFacebook,
  clearUserError,
  userLoading
}) => {
  const { i18n, lang } = useLanguage()
  const { signupForm } = i18n.store.data[lang].translation.auth
  const {theme} = useTheme()
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
          passwordPolicy : true
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
    loaded: true,
    disabled: true,
  }
  return (
    <SignUpForm
      theme={theme}
      locales={signupForm}
      userLoading={userLoading}
      error={error}
      signUpUser={signUpUser}
      initialState={INITIAL_STATE}
      signInWithGoogle={signInWithGoogle}
      clearUserError={clearUserError}
      signInWithFacebook={signInWithFacebook}
    />
  )
}

class SignUpForm extends React.Component {
  state = { ...this.props.initialState }
  timer;
  signUpRef = React.createRef()
  componentDidMount() {
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {    
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }, 66)

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.error !== this.props.error) {
      this.resetForm();
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.props.clearUserError()        
      }, 5000)
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }
  resetForm = () => {
    this.setState(
      this.props.initialState
    )
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
    if(rules.passwordPolicy){
      isValid = POLICY.authenticate.password.test(value) && isValid ; 
      if(!isValid){
        errorsMessage.push(this.props.locales.invalidPassword)
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

  handleSubmitSignUpForm = () => {
    trackCustomEvent({
      action : "Click", 
      category : "auth",
      label : "Sign up with email and password"
    })
    if (!this.state.formIsValid) {
      this.setState({ ...this.props.initialState })
      return
    }
    const { name, gender, email, password } = this.state.controls

    this.props.signUpUser(name.value, gender.value, email.value, password.value)
  }

  handleChangeGoogleRecaptcha = value => {
    this.setState({ captcha_value: value, disabled: false })
    if (value === null) this.setState({ disabled: true })
  }
  onSignInWithGoogle = () => {
    trackCustomEvent({
      action : "Click",
      category : "auth",
      label : "Sign in with Google"
    })
    this.props.signInWithGoogle();
  }
  onSignInWithFacebook = () => {
    trackCustomEvent({
      action : "Click",
      category : "auth",
      label : "Sign in with Facebook"
    })
    this.props.signInWithFacebook();
  }
  render() {
    const { formIsValid, loaded, disabled } = this.state
    let formInputArray = []
    Object.keys(this.state.controls).map(controlItem => {
      formInputArray.push(this.state.controls[controlItem])
    })
    const { error, locales, theme, userLoading } = this.props
    return (
      <AuthFormContainer onSubmit={this.handleSubmitSignUpForm} ref={this.signUpRef} theme={theme}>
        <FormHeader>
          <Title>{locales.title}</Title>
          <SubTitle>{locales.subTitle}</SubTitle>
        </FormHeader>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SocialLoginButtons>
          <GoogleLoginButton onClick={this.onSignInWithGoogle} />
          <FacebookLoginButton onClick={this.onSignInWithFacebook} />
        </SocialLoginButtons>
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
                disabled={userLoading}
              />
            )
          )}
        </FormGroups>
        {loaded && (
          <GoogleRecaptcha onChange={this.handleChangeGoogleRecaptcha} />
        )}
        <ButtonSubmit    
          type="button"      
          onClick={this.handleSubmitSignUpForm}
          disabled={!formIsValid || userLoading}
        >
          <span>{locales.button}</span>
          {userLoading && <CircularProgress />}
        </ButtonSubmit>
        <FormActions>
          <Option>
            {locales.footer.haveAccount.title}{" "}
            <StyledLink to={locales.footer.haveAccount.path}>
              {locales.footer.haveAccount.pathName}
            </StyledLink>
          </Option>
          <Option>
            {locales.footer.forgotPassword.title}{" "}
            <StyledLink to={locales.footer.forgotPassword.path}>
              {locales.footer.forgotPassword.pathName}
            </StyledLink>
          </Option>
        </FormActions>
      </AuthFormContainer>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  error: selectUserError,
  userLoading : selectUserLoading
})

const mapDispatchToProps = dispatch => ({
  signUpUser: (name, gender, email, password) =>
    dispatch(signUpUser(name, gender, email, password)),
  signInWithGoogle: () => dispatch(signInWithGoogle()),
  clearUserError: () => dispatch(clearUserError()),
  signInWithFacebook : () => dispatch(signInWithFacebook())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpFormWrapper)
