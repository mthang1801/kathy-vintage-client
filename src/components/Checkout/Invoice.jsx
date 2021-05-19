import React, { useState, useEffect } from "react"
import { Wrapper, List, ListItem, Title } from "./styles/Invoice.styles"
import useLanguage from "../Global/useLanguage"
import { useTheme } from "../../theme"
import Button from "@material-ui/core/Button"
import { navigate } from "gatsby"
const tax = 10

const Invoice = ({ cartItems, isPayment, shippingFee = 0 }) => {
  const { i18n, lang } = useLanguage()
  const { theme } = useTheme()
  const { checkout } = i18n.store.data[lang].translation
  const totalPriceBeforeTax = cartItems.reduce(
    (acc, item) =>
      item.isDiscount && item.discountPercentage
        ? acc +
          (item.unitPrice * item.quantity * (100 - item.discountPercentage)) /
            100
        : acc + item.unitPrice * item.quantity,
    0
  )

  const totalPriceAfterTax = totalPriceBeforeTax * (100 + tax) / 100
  const totalPrice = totalPriceAfterTax + shippingFee

  const onClickProceedOrder = () => {
    navigate("/checkout/shipping")
  }
  return (
    <Wrapper>
      <List theme={theme}>
        <Title>
          {isPayment ? checkout.invoice.title : checkout.invoice.temporaryTitle}
        </Title>
        <ListItem>
          <span>{checkout.invoice.totalBeforeTax}</span>
          <span>{totalPriceBeforeTax.toLocaleString("de-DE")}</span>
        </ListItem>
        <ListItem>
          <span>{checkout.invoice.tax}</span>
          <span>{tax}%</span>
        </ListItem>
        <ListItem>
          <span>{checkout.invoice.totalAfterTax}</span>
          <span>{totalPriceAfterTax.toLocaleString("de-DE")}</span>
        </ListItem>
        {isPayment && (
          <ListItem>
            <span>{checkout.invoice.shippingFee}</span>
            <span>{shippingFee.toLocaleString("de-DE")}</span>
          </ListItem>
        )}
        {isPayment && (
          <ListItem total>
            <span><strong>{checkout.invoice.totalPrice}</strong></span>
            <span>{totalPrice.toLocaleString("de-DE")}</span>
          </ListItem>
        )}
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

export default Invoice
