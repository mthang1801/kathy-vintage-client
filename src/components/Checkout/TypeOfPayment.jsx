import React, { useState } from "react"
import { Wrapper, Label } from "./styles/TypeOfPayment.styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import Radio from "@material-ui/core/Radio"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import useLanguage from "../Global/useLanguage"
import PaymentInCashImage from "../../images/payment-in-cash.png"
import CreaditCardImage from "../../images/credit-card.png"
import RadioGroup from "@material-ui/core/RadioGroup"
import StripeButton from "../Controls/StripeButton"
import { useTheme } from "../../theme"
const TypeOfPayment = ({ user, paymentMethod, setPaymentMethod }) => {
  const { i18n, lang } = useLanguage()
  const { theme } = useTheme()
  const { typeOfPayment } = i18n.store.data[lang].translation.checkout.payment
 
  const handleChange = e => {
    const {value} = e.target; 
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
