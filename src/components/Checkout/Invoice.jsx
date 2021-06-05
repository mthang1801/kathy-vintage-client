import React from "react"
import { Wrapper, List, ListItem, Title } from "./styles/Invoice.styles"
import {useLanguage} from "../../locales"
import { useTheme } from "../../theme";


const Invoice = ({isPayment, totalPriceBeforeTax, totalPriceAfterTax, totalPrice, tax, shippingFee = 0 }) => {
  const { translation : {checkout} } = useLanguage()
  const { theme } = useTheme()
  return (
    <Wrapper>
      <List theme={theme}>
        {!isPayment && <Title>
         {checkout.invoice.temporaryTitle}
        </Title>}
        
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
