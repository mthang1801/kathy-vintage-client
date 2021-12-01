export const orderTotalPrice = (productsList) =>
  productsList.reduce(
    (acc, item) =>
      item.isDiscount && item.discountPercentage
        ? acc +
          (item.unitPrice * item.quantity * (100 - item.discountPercentage)) /
            100
        : acc + item.unitPrice * item.quantity,
    0
  );

export const totalPriceWithShippingFee = (orderTotalPrice, shippingFee) =>
  orderTotalPrice + shippingFee;
