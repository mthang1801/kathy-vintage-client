import React from "react"
import {
  Wrapper,
  ImageContainer,
  ProductInformationOverview,
  ProductName,
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
          <ProductName>{product[`name_${lang}`]}</ProductName>
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
          <span>
            {payment.shipping} {shippingMethod.value}
          </span>
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
