import React from "react"
import {
  Wrapper,
  ImageContainer,
  ProductInformationOverview,
  ProductContent,
  ProductPriceAndQuantity,
  ProductShippingInformation,
  ProductShippingOverview,
  ShippingTime,
} from "./styles/CheckoutOrderedProductItem.Payment.styles"
import {useLanguage} from "../../locales"
import { useTheme } from "../../theme"
import Moment from "react-moment"
import "moment/locale/vi"
import "moment/locale/es-us"

const CheckoutPaymentOrderedProductItem = ({ product, shippingMethod }) => {
  console.log(product)
  const { translation : {checkout : {payment}}, lang } = useLanguage()
  const { theme } = useTheme()
  const productPrice =
    product.isDiscount && product.discountPercentage
      ? (product.quantity *
          product.unitPrice *
          (100 - +product.discountPercentage)) /
        100
      : product.quantity * product.unitPrice  
  return (
    <Wrapper theme={theme}>
      <ImageContainer>
        <img
          src={`https:${product.images[0].file.url}`}
          alt={product[`name_${lang}`]}
        />
      </ImageContainer>
      <ProductShippingInformation>
        <ProductInformationOverview>
          <ProductContent>
            {product[`name_${lang}`]}
            {product.selectedColor && <p><strong>{payment.product.color}:</strong> {product.selectedColor}</p>}
            {product.selectedSize && <p><strong>{payment.product.size}:</strong> {product.selectedSize}</p>}
          </ProductContent>
          <ProductPriceAndQuantity>
            <span>
              {payment.quantity} : <strong>{product.quantity}</strong>
            </span>
            <span>
              {payment.price} :{" "}
              <strong>{productPrice.toLocaleString("de-DE")}</strong>
            </span>
          </ProductPriceAndQuantity>
        </ProductInformationOverview>
        <ProductShippingOverview>
          <p>
            {payment.shipping} {shippingMethod.value}
          </p>
          <ShippingTime theme={theme}>
            <span style={{ color: "" }}>Dự kiến: </span>
            {shippingMethod.key === "fast" ? (
              <Moment
                add={{ hours: 2 }}
                locale={lang === "vi" ? "vi" : "es-us"}
                format="dddd DD MMM - hh:mm"
              >
                {new Date()}
              </Moment>
            ) : (
              <Moment
                add={{ days: 3 }}
                locale={lang === "vi" ? "vi" : "es-us"}
                format="dddd DD MMM"
              >
                {new Date()}
              </Moment>
            )}
          </ShippingTime>
        </ProductShippingOverview>
      </ProductShippingInformation>
    </Wrapper>
  )
}

export default CheckoutPaymentOrderedProductItem
