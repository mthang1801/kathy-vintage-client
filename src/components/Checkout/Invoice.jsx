import React, { useState, useEffect } from "react"
import { Wrapper, List, ListItem, Title } from "./styles/Invoice.styles"
import useLanguage from "../Global/useLanguage"
import { useTheme } from "../../theme";


const Invoice = ({ cartItems, isPayment, totalPriceBeforeTax, totalPriceAfterTax, totalPrice, tax, shippingFee = 0 }) => {
  const { i18n, lang } = useLanguage()
  const { theme } = useTheme()
  const { checkout } = i18n.store.data[lang].translation
  

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

     
    </Wrapper>
  )
}

export default Invoice
