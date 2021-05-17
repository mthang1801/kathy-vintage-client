import React from "react"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import Button from "@material-ui/core/Button"
import { Wrapper, Title } from "./styles/UserInformationForm.styles"
import useLanguage from "../Global/useLanguage"
import { useTheme } from "../../theme"
import localData from "../../database/local.json"

const WrapperUserInformationForm = () => {
  const { i18n, lang } = useLanguage()
  const { information } = i18n.store.data[lang].translation.user
  const { theme } = useTheme()
  return <UserInformationForm information={information} theme={theme} />
}

class UserInformationForm extends React.Component {
  state = {
    cities: localData,
    districts: [],
    wards: [],
    fullname: {
      name: "fullname",
      nameField: this.props.information.fullname,
      value: "",
      isValid: false,
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
      value: "",
      isValid: false,
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
      value: "",
      errorMessage: "",
    },
    district: {
      name: "district",
      nameField: this.props.information.district,
      value: "",
    },
    ward: {
      name: "ward",
      nameField: this.props.information.ward,
      value: "",
    },
    address: {
      name: "address",
      nameField: this.props.information.address,
      value: "",
      isValid: false,
      rules: {
        required: true,
      },
      touched: false,
      errorMessage: "",
    },
    addressType: "home",
    validation: false,
  }

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
    if (prevState.district.value !== this.state.district.value ) {
      if (this.state.district.value && this.state.districts.length) {
        const wardsList = this.state.districts.find(district => district.name === this.state.district.value).wards;
        if(wardsList){
          this.setState({wards : wardsList});
        }
      } else {
        this.setState({ wards: [] })
      }
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

  onChangeSelection = e => {
    const { name, value } = e.target
    const updatedState = { ...this.state }
    let updatedElement = updatedState[name]

    updatedElement.value = { ...JSON.parse(value) }
    updatedState[name] = { ...updatedElement }

    this.setState({ ...updatedState })
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
      address
    } = this.state
    const { information } = this.props

    return (
      <Wrapper theme={this.props.theme}>
        <Title>{information.title}</Title>
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
        <Button disabled={!validation} color="primary" variant="contained">Submit</Button>
      </Wrapper>
    )
  }
}

export default WrapperUserInformationForm
