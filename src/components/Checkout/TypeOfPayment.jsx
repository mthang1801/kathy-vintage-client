import React, { useState } from "react"
import { Wrapper, Label } from "./styles/TypeOfPayment.styles"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import { useLanguage } from "../../locales"
import PaymentInCashImage from "../../images/payment-in-cash.png"
import CreaditCardImage from "../../images/credit-card.png"
import RadioGroup from "@material-ui/core/RadioGroup"
import { useTheme } from "../../theme"
const TypeOfPayment = ({ user, paymentMethod, setPaymentMethod }) => {
  const {
    translation: {
      checkout: {
        payment: { typeOfPayment },
      },
    },
  } = useLanguage()
  const { theme } = useTheme()

  const handleChange = e => {
    const { value } = e.target
    setPaymentMethod(typeOfPayment[value])
  }

  return (
    <Wrapper theme={theme}>
      <RadioGroup
        aria-label="type-of-payment"
        value={paymentMethod.key}
        onChange={handleChange}
      >
        <FormControlLabel
          value={typeOfPayment.payment_in_cash.key}
          control={<Radio />}
          label={
            <Label>
              {" "}
              <img
                src={PaymentInCashImage}
                alt={typeOfPayment.payment_in_cash.value}
              />{" "}
              <span>{typeOfPayment.payment_in_cash.value}</span>
            </Label>
          }
        />
        <FormControlLabel
          value={typeOfPayment.payment_in_card.key}
          control={<Radio />}
          label={
            <Label>
              {" "}
              <img
                src={CreaditCardImage}
                alt={typeOfPayment.payment_in_card.value}
              />{" "}
              <span>{typeOfPayment.payment_in_card.value}</span>
            </Label>
          }
        />
      </RadioGroup>
    </Wrapper>
  )
}

export default TypeOfPayment
