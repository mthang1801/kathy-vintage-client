import React, { useEffect, useState, useRef } from "react"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import Divider from "@material-ui/core/Divider"
import InputLabel from "@material-ui/core/InputLabel"
import Button from "@material-ui/core/Button"
import { Form, ErrorAlert, Flex } from "./styles/GeneralInformation.styles"
import useLanguage from "../Global/useLanguage"
import { useTheme } from "../../theme"
import localData from "../../database/local.json"
import { Header, Title } from "./styles/DashBoard.styles"
import { connect } from "react-redux"
import { updateUserInformation } from "../../redux/user/user.actions"
import AlertDialog from "../UI/FeedBacks/Dialog/AlertDialog"

const WrapperUserGeneralInformationForm = ({
  user,
  updateUserInformation,
  information,
  title,
}) => {
  const { i18n, lang } = useLanguage()
  const { theme } = useTheme()
  const formRef = useRef(null)
  console.log(user)
  return (
    <>
      <Header>
        <Title>{title}</Title>
      </Header>
      <Divider />
      <UserInformationForm
        ref={formRef}
        information={information}
        theme={theme}
        updateUserInformation={updateUserInformation}
        user={user}
      />
    </>
  )
}

class UserInformationForm extends React.Component {
  INITIAL_STATE = {
    cities: localData,
    districts: [],
    wards: [],
    fullname: {
      name: "fullname",
      nameField: this.props.information.fullname,
      value: this.props.user?.information?.fullname || "",
      isValid: !!this.props.user?.information?.fullname,
      rules: {
        isFullName: true,
        required: true,
      },
      touched: false,
      errorMessage: "",
    },
    phone: {
      name: "phone",
      nameField: this.props.information.phone,
      value: this.props.user?.information?.phone || "",
      isValid: !!this.props.user?.information?.phone,
      rules: {
        isValidPhone: true,
        required: true,
      },
      touched: false,
      errorMessage: "",
    },
    city: {
      name: "city",
      nameField: this.props.information.city,
      value: this.props.user?.information?.city || "",
      errorMessage: "",
    },
    district: {
      name: "district",
      nameField: this.props.information.district,
      value: this.props.user?.information?.district || "",
    },
    ward: {
      name: "ward",
      nameField: this.props.information.ward,
      value: this.props.user?.information?.ward || "",
    },
    address: {
      name: "address",
      nameField: this.props.information.address,
      value: this.props.user?.information?.address || "",
      isValid: !!this.props.user?.information?.address,
      rules: {
        required: true,
      },
      touched: false,
      errorMessage: "",
    },
    validation: false,
    error: null,
    allowUpdate: false,
    openAlert: false,    
  }
  state = {
    ...this.INITIAL_STATE,
  }

  timer

  componentDidUpdate(prevProps, prevState) {
    if (prevState.city.value !== this.state.city.value) {
      if (this.state.city.value) {
        const districtLists = localData.find(
          city => city.name === this.state.city.value
        ).districts
        if (districtLists) {
          this.setState({ districts: districtLists, wards: [] })
        }
      } else {
        this.setState({ districts: [], wards: [] })
      }
    }
    if (prevState.district.value !== this.state.district.value) {
      if (this.state.district.value && this.state.districts.length) {
        const wardsList = this.state.districts.find(
          district => district.name === this.state.district.value
        ).wards
        if (wardsList) {
          this.setState({ wards: wardsList })
        }
      } else {
        this.setState({ wards: [] })
      }
    }
    if (prevState.error !== this.state.error) {
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.setState({ error: null })
      }, 7000)
    }
  }
  componentDidMount() {
    if (this.state.city.value) {
      const districtLists = localData.find(
        city => city.name === this.state.city.value
      ).districts
      if (districtLists) {
        this.setState({ districts: districtLists })
      }
    }

    if (this.state.district.value) {
      const wardsList = localData
        .find(city => city.name === this.state.city.value)
        .districts.find(district => district.name === this.state.district.value)
        .wards
      if (wardsList) {
        this.setState({ wards: wardsList })
      }
    }
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }
  checkFieldValidation = (value, rules) => {
    const { errorMessages: errorMessagesTranslation } = this.props.information
    let isValid = true
    let errorMessages = []
    if (rules.required) {
      isValid = value.trim().length && isValid
      if (!isValid) {
        errorMessages.push(errorMessagesTranslation.required)
      }
    }
    if (rules.isFullName) {
      isValid = value.trim().split(" ").length > 1 && isValid
      if (!isValid) {
        errorMessages.push(errorMessagesTranslation.fullName)
      }
    }
    if (rules.isValidPhone) {
      const phonePattern = /(84|0[3|5|7|8|9])+([0-9]{8})\b/
      isValid = phonePattern.test(value) && isValid
      if (!isValid) {
        errorMessages.push(errorMessagesTranslation.invalidPhone)
      }
    }

    return errorMessages.join(", ").toString().trim()
  }

  onChangeField = e => {
    const { name, value } = e.target

    const updatedState = { ...this.state }
    let updatedElement = { ...updatedState[name] }
    updatedElement.value = value
    if (updatedElement.rules) {
      updatedElement.touched = true
      updatedElement.errorMessage = this.checkFieldValidation(
        value,
        updatedElement.rules
      )
      updatedElement.isValid = !!!this.checkFieldValidation(
        value,
        updatedElement.rules
      )
    }

    updatedState[name] = { ...updatedElement }
    const { fullname, phone, city, district, ward, address } = updatedState
    let formIsValid = false
    if (
      fullname.isValid &&
      phone.isValid &&
      city.value &&
      district.value &&
      ward.value &&
      address.isValid
    ) {
      formIsValid = true
    }
    return this.setState({ ...updatedState, validation: formIsValid })
  }

  resetForm = () => {
    this.setState(this.INITIAL_STATE)
  }

  onSubmitForm = async () => {
    const {
      fullname,
      phone,
      city,
      district,
      ward,
      address,
      validation,
    } = this.state

    if (
      fullname.value &&
      phone.value &&
      city.value &&
      district.value &&
      ward.value &&
      address.value &&
      validation
    ) {
      const information = {
        fullname: fullname.value,
        phone: phone.value,
        city: city.value,
        district: district.value,
        address: address.value,
        ward: ward.value,
      }
      try {
        await this.props.updateUserInformation(information);
        this.setState({allowUpdate : false});
      } catch (error) {
        this.setState({ error })
      }
    }
  }

  render() {
    const {
      fullname,
      phone,
      cities,
      districts,
      wards,
      validation,
      city,
      district,
      ward,
      address,
      error,
      allowUpdate,
      openAlert,
    } = this.state
    const { information, user } = this.props
    const updatedDateDiffFromNow = user.updatedAt ? (new Date()-new Date(user.updatedAt.seconds * 1000)) / (24 * 60 * 60 * 1000)   :true;
    return (
      <>
        <AlertDialog
          open={openAlert}
          setOpen={value => this.setState({openAlert : value})}
          title={information.confirm_submit_change_information.title}
          content={information.confirm_submit_change_information.content}
          onAgree={this.onSubmitForm}
        />
        <Form theme={this.props.theme} id="shipping-user-form-information">
          {error && <ErrorAlert>{error}</ErrorAlert>}
          {/* Full name */}
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            id="user-information-uid"
            label={information.id}
            name={information.id}
            defaultValue={user.uid}
            disabled
          />
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            id="user-information-email"
            label={information.email}
            name={information.email}
            defaultValue={user.email}
            disabled
          />
          {/* full name */}
          <TextField
            fullWidth
            error={!fullname.isValid && fullname.touched}
            size="small"
            variant="outlined"
            id="user-information-full-name"
            label={fullname.nameField}
            name={fullname.name}
            value={fullname.value}
            onChange={this.onChangeField}
            helperText={fullname.errorMessage}
            disabled={!allowUpdate}
          />
          {/* Phone Number */}
          <TextField
            fullWidth
            error={!phone.isValid && phone.touched}
            size="small"
            variant="outlined"
            id="user-information-phone"
            label={phone.nameField}
            name={phone.name}
            value={phone.value}
            onChange={this.onChangeField}
            helperText={phone.errorMessage}
            disabled={!allowUpdate}
          />
          {/* City */}
          <FormControl size="small" variant="outlined" disabled={!allowUpdate}>
            <InputLabel htmlFor="user-information-city">
              {city.nameField}
            </InputLabel>
            <Select
              native
              value={city.value}
              label={city.nameField}
              inputProps={{
                name: "city",
                id: "user-information-city",
              }}
              onChange={this.onChangeField}
            >
              <option aria-label="None" value="" />
              {cities.map(city => (
                <option key={city.code} value={city.name}>
                  {city.name}
                </option>
              ))}
            </Select>
          </FormControl>
          {/* Districts */}
          <FormControl size="small" variant="outlined" disabled={!allowUpdate}>
            <InputLabel htmlFor="user-information-district">
              {district.nameField}
            </InputLabel>
            <Select
              native
              value={district.value}
              label={district.nameField}
              inputProps={{
                name: "district",
                id: "user-information-district",
              }}
              onChange={this.onChangeField}
            >
              <option aria-label="None" value="" />
              {districts.map(district => (
                <option key={district.code} value={district.name}>
                  {district.name}
                </option>
              ))}
            </Select>
          </FormControl>
          {/* Wards */}
          <FormControl size="small" variant="outlined" disabled={!allowUpdate}>
            <InputLabel htmlFor="user-information-ward">
              {ward.nameField}
            </InputLabel>
            <Select
              native
              value={
                ward.value ? ward.value : information.null_information_field
              }
              label={ward.nameField}
              inputProps={{
                name: "ward",
                id: "user-information-ward",
              }}
              onChange={this.onChangeField}
            >
              <option aria-label="None" value={""} />
              {wards.map(ward => (
                <option key={`ward-${ward.id}`} value={ward.name}>
                  {ward.name}
                </option>
              ))}
            </Select>
          </FormControl>
          {/* Address */}
          <TextField
            fullWidth
            error={!address.isValid && address.touched}
            size="small"
            variant="outlined"
            id="user-information-address"
            label={address.nameField}
            name={address.name}
            value={address.value}
            onChange={this.onChangeField}
            helperText={address.errorMessage}
            disabled={!allowUpdate}
          />
          <Flex>
            {updatedDateDiffFromNow < 7 ? null : !allowUpdate ? (
              <Button
                onClick={() => this.setState({ allowUpdate: true })}
                color="primary"
                variant="contained"
              >
                {information.buttonUpdate}
              </Button>
            ) : (
              <Button
                onClick={() => this.setState({ openAlert: true })}
                disabled={!validation}
                color="primary"
                variant="contained"
              >
                {information.buttonSaveChange}
              </Button>
            )}
          </Flex>
        </Form>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateUserInformation: information =>
    dispatch(updateUserInformation(information)),
})

export default connect(
  null,
  mapDispatchToProps
)(WrapperUserGeneralInformationForm)
