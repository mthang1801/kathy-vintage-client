import React from "react"
import {
  AuthFormContainer,
  FormHeader,
  Title,
  SubTitle,
  FormGroups,
  FormActions,
  StyledLink,
  Option,
  SocialLoginButtons,
  ErrorMessage,
  ButtonSubmit
} from "./styles/AuthForm.styles"
import Input from "./Input"
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import {
  selectUserError,
  selectUserLoading,  
} from "../../redux/user/user.selectors"
import { signIn, signInWithGoogle, signInWithFacebook, clearUserError } from "../../redux/user/user.actions"
import GoogleRecaptcha from "./GoogleRecaptcha"
import useLanguage from "../Global/useLanguage"
import GoogleLoginButton from "./GoogleLoginButton"
import FacebookLoginButton from "./FacebookLoginButton"
import {useTheme} from "../../theme"
import {trackCustomEvent} from "gatsby-plugin-google-analytics"
const SignInFormWrapper = ({ error, signIn, loading, signInWithGoogle, signInWithFacebook, clearUserError }) => {
  const { i18n, lang } = useLanguage()
  const { loginForm } = i18n.store.data[lang].translation.auth  
  const {theme} = useTheme()
  return (
    <SignInForm
      theme={theme}
      locales={loginForm}
      error={error}
      signIn={signIn}
      loading={loading}
      signInWithGoogle={signInWithGoogle}
      signInWithFacebook={signInWithFacebook}
      clearUserError={clearUserError}
    />
  )
}

class SignInForm extends React.Component {
  constructor(props) {
    super(props)
    this.signInRef = React.createRef()
  }
  state = {
    email: "",
    password: "",
    disabled: true,
    loaded: true,
    captcha_value: null,
  }

  timer = null
  componentDidMount() {   
    window.scrollTo({
      top:0,
      behavior: "smooth",
    })
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.error !== this.props.error){
      clearTimeout(this.timer);
      this.timer = setTimeout(()=>{
        this.props.clearUserError();
      },5000)
      
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.error !== this.props.error) {
      this.setState({ error: this.props.error })
    }
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
  onSubmitSigninForm = async e => {
    e.preventDefault()
    trackCustomEvent({
      action : "Click", 
      category : "auth",
      label : "Submit sign in form"
    })
    const { email, password } = this.state
    if (!email || !password) {
      this.setState({ error: this.props.locales.requireEmailAndPassword })
      return
    }
    this.setState({ error: null })
    console.log(email, password)
    this.props.signIn(email, password)
    
  }
  render() {
    const { email, password, disabled, loaded } = this.state
    const { error, locales, loading, theme } = this.props
    return (
      <AuthFormContainer
        onSubmit={this.onSubmitSigninForm}
        ref={this.signInRef}
        theme={theme}
      >
        <FormHeader>
          <Title>{locales.title}</Title>
          <SubTitle>{locales.subTitle}</SubTitle>
        </FormHeader>
        {loading && <div>Loading...</div>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <SocialLoginButtons>
          <GoogleLoginButton onClick={this.onSignInWithGoogle}/>
          <FacebookLoginButton onClick={this.onSignInWithFacebook}/>
        </SocialLoginButtons>
        <FormGroups>
          <Input
            type="text"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
            disabled={loading}
          />
          <Input
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
            required
            disabled={loading}
          />
          {loaded && (
            <GoogleRecaptcha onChange={this.handleChangeGoogleRecaptcha} />
          )}
          <ButtonSubmit
            onClick={this.onSubmitSigninForm}
            type="button"            
            disabled={disabled || loading}
            style={{ marginTop: "1rem" }}
          >
            <span>{locales.button}</span>
            {loading && <CircularProgress/>}
          </ButtonSubmit>
        </FormGroups>
        <FormActions>
          <Option>
            {locales.footer.dontHaveAccount.title}{" "}
            <StyledLink to={locales.footer.dontHaveAccount.path}>
              {locales.footer.dontHaveAccount.pathName}
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
  loading: selectUserLoading,
})

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(signIn(email, password)),
  signInWithGoogle : () => dispatch(signInWithGoogle()),
  signInWithFacebook : () => dispatch(signInWithFacebook()),
  clearUserError : () => dispatch(clearUserError())
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInFormWrapper)
