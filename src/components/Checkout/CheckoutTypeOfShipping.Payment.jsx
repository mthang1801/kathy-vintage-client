import React from "react"
import {
  Wrapper,
  TypeOfShipping,
} from "./styles/CheckoutTypeOfShipping.Payment.styles"
import Radio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { useTheme } from "../../theme"
const CheckoutPaymentTypeOfShipping = ({
  user,
  cartItems,
  types,
  shippingType,
  setShippingType,
}) => {
  const { theme } = useTheme()
  const handleRadioChange = e => {
    const { value, name } = e.target
    setShippingType(types[name])
  }
  return (
    <TypeOfShipping theme={theme}>
      <RadioGroup
        aria-label="type-of-shipping"
        name="type-of-shipping"
        value={shippingType.value}
        onChange={handleRadioChange}
      >
        {types.standard && (
          <FormControlLabel
            name={types.standard.key}
            value={types.standard.value}
            control={<Radio size="small" color="primary" />}
            label={types.standard.value}
          />
        )}
        {user?.information?.city?.toLowerCase() === "hồ chí minh" && types.fast && (
          <FormControlLabel
            name={types.fast.key}
            value={types.fast.value}
            control={<Radio size="small" color="primary" />}
            label={types.fast.value}
          />
        )}
      </RadioGroup>
    </TypeOfShipping>
  )
}

export default CheckoutPaymentTypeOfShipping
