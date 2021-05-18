import React, { useState, useEffect } from "react"
import {
  Wrapper,
  List,
  ListItem,
  Title,
} from "./styles/TemporaryInvoice.styles"
import useLanguage from "../Global/useLanguage"
import { useTheme } from "../../theme"
import Button from "@material-ui/core/Button"
import { navigate } from "gatsby"
const tax = 10

const TemporaryInvoice = ({ cartItems }) => {
  const { i18n, lang } = useLanguage()
  const { theme } = useTheme()
  const { checkout } = i18n.store.data[lang].translation
  const totalPrice = cartItems.reduce(
    (acc, item) =>
      item.isDiscount && item.discountPercentage
        ? acc + (item.unitPrice * item.quantity * (100 - item.discountPercentage)) / 100
        : acc + item.unitPrice * item.quantity,
    0
  )

  const [totalPriceBeforeTax, setTotalPriceBeforeTax] = useState(totalPrice)
  useEffect(() => {  
    
    setTotalPriceBeforeTax(totalPrice)
  }, [cartItems])

  const onClickProceedOrder = () => {
    navigate("/checkout/shipping")
  }
  return (
    <Wrapper>
      <List theme={theme}>
        <Title>{checkout.invoice.title}</Title>
        <ListItem>
          <span>{checkout.invoice.totalBeforeTax}</span>
          <span>{totalPriceBeforeTax.toLocaleString("de-DE")}</span>
        </ListItem>
        <ListItem>
          <span>{checkout.invoice.tax}</span>
          <span>{tax}%</span>
        </ListItem>
        <ListItem total>
          <span>{checkout.invoice.totalAfterTax}</span>
          <span>
            {(totalPriceBeforeTax * (1 + tax / 100)).toLocaleString("de-DE")}
          </span>
        </ListItem>
      </List>

      <Button
        color="secondary"
        variant="contained"
        style={{ display: "block", width: "100%" }}
        onClick={onClickProceedOrder}
      >
        {checkout.button_proceed_order}
      </Button>
    </Wrapper>
  )
}

export default TemporaryInvoice
