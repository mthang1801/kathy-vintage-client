import React from 'react';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
  orderTotalPrice,
  totalPriceWithShippingFee,
} from '../../utils/calculateOrderPrice';
import { OrderValue } from './styles/OrderPriceItem.styles';
const OrderPriceItem = ({ order, ordersTranslation }) => {
  const _orderTotalPrice = orderTotalPrice(order.products_line);

  const _totalPriceWithShippingFee = totalPriceWithShippingFee(
    _orderTotalPrice,
    order.shipping_fee
  );
  return (
    <>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <span>{ordersTranslation.product.orderTotalPrice}</span>
        <OrderValue>{_orderTotalPrice.toLocaleString('de-DE')}</OrderValue>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <span>{ordersTranslation.product.shipping_fee}</span>
        <OrderValue>{order.shipping_fee.toLocaleString('de-DE')}</OrderValue>
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
          {_totalPriceWithShippingFee.toLocaleString('de-DE')}
        </OrderValue>
      </Grid>
    </>
  );
};

export default OrderPriceItem;
