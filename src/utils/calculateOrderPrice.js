export const totalPriceBeforeTax = (productsList) => productsList.reduce(
  (acc, item) =>
    item.isDiscount && item.discountPercentage
      ? acc +
        (item.unitPrice * item.quantity * (100 - item.discountPercentage)) /
          100
      : acc + item.unitPrice * item.quantity,
  0
)
export const totalPriceAfterTax = (totalPriceBeforeTax, tax) => (totalPriceBeforeTax * (100 + tax)) / 100

export const totalPriceWithShippingFee = (totalPriceAfterTax, shippingFee) => totalPriceAfterTax + shippingFee