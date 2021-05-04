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
  FlashForm,
  ErrorMessage,
} from "./styles/AuthForm.styles"
import Input from "./Input"
import Button from "@material-ui/core/Button"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { selectUserError } from "../../redux/user/user.selectors"
import { loginStart } from "../../redux/user/user.actions"
import GoogleRecaptcha from "./GoogleRecaptcha"
import FacebookLogin from "./FacebookLogin"
import GoogleLogin from "./GoogleLogin"
class SignIn extends React.Component {
  constructor(props) {
    super(props)
    this.signInRef = React.createRef()
  }
  state = {
    email: "",
    password: "",
    disabled: true,
    loaded: false,
    captcha_value: null,
  }

  timer = null
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ loaded: true })
    }, 1000)
    window.scrollTo({
      top: this.signInRef.current.offsetTop,
      behavior: "smooth",
    })
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

  onSubmitSigninForm = async e => {
    e.preventDefault()
    const { email, password } = this.state
    if (!email || !password) {
      this.setState({ error: "Email và mật khẩu không được để trống" })
      return
    }
    this.setState({ error: null })
    try {
      this.props.login(email, password)
    } catch (error) {
      console.log(error)
    }
  }
  handleChangeGoogleRecaptcha = value => {
    this.setState({ captcha_value: value, disabled: false })
    if (value === null) this.setState({ disabled: true })
  }

  render() {
    const { email, password, disabled, loaded } = this.state
    const { authPath, error } = this.props
    return (
      <AuthFormContainer
        onSubmit={this.onSubmitSigninForm}
        ref={this.signInRef}
      >
        <FormHeader>
          <Title>Đăng nhập</Title>
          <SubTitle>Đăng nhập tài khoản bằng email và mật khẩu</SubTitle>
        </FormHeader>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <FlashForm>
          <FacebookLogin />
          <GoogleLogin />
        </FlashForm>
        <FormGroups>
          <Input
            type="text"
            name="email"
            value={email}
            label="Email"
            onChange={this.handleChange}
            required
          />
          <Input
            type="password"
            name="password"
            value={password}
            label="Password"
            onChange={this.handleChange}
            required
          />
          {loaded && (
            <GoogleRecaptcha onChange={this.handleChangeGoogleRecaptcha} />
          )}
          <Button
            variant="outlined"
            size="small"           
            disabled={disabled}
            style={{ marginTop: "1rem" }}
          >
            Sign In
          </Button>
        </FormGroups>
        <FormActions>
          <Option>
            Don't have account ?{" "}
            <StyledLink to={`${authPath}/signup`}>Signup account</StyledLink>
          </Option>
          <Option>
            Forgot password ?{" "}
            <StyledLink to={`${authPath}/restore-account`}>
              Get Password Again.
            </StyledLink>
          </Option>
        </FormActions>
      </AuthFormContainer>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  error: selectUserError,
})

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(loginStart(email, password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignIn))
