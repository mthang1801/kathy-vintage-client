export const cancelOrderUtils = (orders, canceledOrderId) =>
  orders.map((order) => {
    if (order.id === canceledOrderId) {
      order.order_status = 'canceled';
    }
    return order;
  });
