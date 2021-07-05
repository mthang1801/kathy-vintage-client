import React, { useEffect, useRef } from "react"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import Button from "@material-ui/core/Button"
import {
  Wrapper,
  Title,
  ErrorAlert,
  Flex,
} from "./styles/UserInformationForm.styles"
import { useLanguage } from "../../locales"
import { useTheme } from "../../theme"
import localData from "../../database/local.json"
const WrapperUserInformationForm = ({
  user,
  updateUserInformation,
  isUpdate,
  setUpdateInfo,
}) => {
  const {
    translation: {
      user: { information },
    },
  } = useLanguage()
  const { theme } = useTheme()
  const formRef = useRef(null)

  return (
    <UserInformationForm
      ref={formRef}
      information={information}
      theme={theme}
      updateUserInformation={updateUserInformation}
      user={user}
      isUpdate={isUpdate}
      setUpdateInfo={setUpdateInfo}
    />
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
      value: this.props.isUpdate ? this.props.user.information.fullname : "",
      isValid: this.props.isUpdate
        ? !!this.props.user.information.fullname
        : false,
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
      value: this.props.isUpdate ? this.props.user.information.phone : "",
      isValid: this.props.isUpdate
        ? !!this.props.user.information.phone
        : false,
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
      value: this.props.isUpdate ? this.props.user.information.city : "",
      errorMessage: "",
    },
    district: {
      name: "district",
      nameField: this.props.information.district,
      value: this.props.isUpdate ? this.props.user.information.district : "",
    },
    ward: {
      name: "ward",
      nameField: this.props.information.ward,
      value: this.props.isUpdate ? this.props.user.information.ward : "",
    },
    address: {
      name: "address",
      nameField: this.props.information.address,
      value: this.props.isUpdate ? this.props.user.information.address : "",
      isValid: this.props.isUpdate
        ? !!this.props.user.information.address
        : false,
      rules: {
        required: true,
      },
      touched: false,
      errorMessage: "",
    },
    addressType: "home",
    validation: false,
    error: null,
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
    if (this.props.isUpdate) {
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
          .districts.find(
            district => district.name === this.state.district.value
          ).wards
        if (wardsList) {
          this.setState({ wards: wardsList })
        }
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
        await this.props.updateUserInformation(information)
        this.props.setUpdateInfo(false)
      } catch (error) {
        this.setState({ error })
      }
    }
  }

  closeUpdateInfo = () => {
    this.props.setUpdateInfo(false)
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
    } = this.state
    const { information } = this.props

    return (
      <Wrapper theme={this.props.theme} id="shipping-user-form-information">
        <Title>{information.title}</Title>
        {error && <ErrorAlert>{error}</ErrorAlert>}
        {/* Full name */}
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
        />
        {/* City */}
        <FormControl size="small" variant="outlined">
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
        <FormControl size="small" variant="outlined">
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
        <FormControl size="small" variant="outlined">
          <InputLabel htmlFor="user-information-ward">
            {ward.nameField}
          </InputLabel>
          <Select
            native
            value={ward.value}
            label={ward.nameField}
            inputProps={{
              name: "ward",
              id: "user-information-ward",
            }}
            onChange={this.onChangeField}
          >
            <option aria-label="None" value="" />
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
        />

        <Flex isUpdate={this.props.isUpdate}>
          {this.props.isUpdate && (
            <Button variant="contained" onClick={this.closeUpdateInfo}>
              {information.button_close_information_form}
            </Button>
          )}
          <Button
            onClick={this.onSubmitForm}
            disabled={!validation}
            color="primary"
            variant="contained"
          >
            {this.props.isUpdate
              ? information.buttonUpdate
              : information.buttonSubmit}
          </Button>
        </Flex>
      </Wrapper>
    )
  }
}

export default WrapperUserInformationForm
