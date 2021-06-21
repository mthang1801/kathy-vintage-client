import React from "react"
import Grid from "@material-ui/core/Grid"
import Divider from "@material-ui/core/Divider"
import {
  totalPriceBeforeTax,
  totalPriceAfterTax,
  totalPriceWithShippingFee,
} from "../../utils/calculateOrderPrice"
import { OrderValue } from "./styles/OrderPriceItem.styles"
const OrderPriceItem = ({ order, ordersTranslation }) => {
  const _totalPriceBeforeTax = totalPriceBeforeTax(order.products_line)
  const _totalPriceAfterTax = totalPriceAfterTax(
    _totalPriceBeforeTax,
    order.tax
  )
  const _totalPriceWithShippingFee = totalPriceWithShippingFee(
    _totalPriceAfterTax,
    order.shipping_fee
  )
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <span>{ordersTranslation.product.totalBeforeTax}</span>
        <OrderValue>{_totalPriceBeforeTax.toLocaleString("de-DE")}</OrderValue>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <span>{ordersTranslation.product.tax}</span>
        <OrderValue>{order.tax}%</OrderValue>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <span>{ordersTranslation.product.totalAfterTax}</span>
        <OrderValue>{_totalPriceAfterTax.toLocaleString("de-DE")}</OrderValue>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <span>{ordersTranslation.product.shipping_fee}</span>
        <OrderValue>{order.shipping_fee.toLocaleString("de-DE")}</OrderValue>
      </Grid>
      <Divider />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <span>{ordersTranslation.product.totalPrice}</span>
        <OrderValue>
          {_totalPriceWithShippingFee.toLocaleString("de-DE")}
        </OrderValue>
      </Grid>
    </>
  )
}

export default OrderPriceItem
