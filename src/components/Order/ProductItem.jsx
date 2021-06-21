import React, { useState } from "react"
import {
  Wrapper,
  ImageContainer,
  ProductInformationOverview,
  ProductName,
  ProductPriceAndQuantity,
  ProductPrice,
  ProductPriceAfterDiscount,
  ProductPriceOrigin,
  ProductQuantity,
  ProductTotalPrice,
} from "./styles/ProductItem.styles"
import { useLanguage } from "../../locales"
import { useTheme } from "../../theme"
import { navigate } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import { getDeviceType } from "../../utils/getDeviceType"
const CheckoutProductItem = ({ product, ordersTranslation }) => {
  const { lang } = useLanguage()
  const { theme } = useTheme()
  const productPrice =
    product.isDiscount && product.discountPercentage
      ? (product.unitPrice * (100 - +product.discountPercentage)) / 100
      : product.unitPrice
  return (
    <Wrapper
      theme={theme}
      onClick={e => {
        e.preventDefault()
        trackCustomEvent({
          action: "Click",
          category: "navigate",
          label: "Go to Product Item",
        })
        navigate(`/products/${product.slug}`)
      }}
    >
      {getDeviceType() !== "mobile" && (
        <ProductQuantity>{product.quantity} x</ProductQuantity>
      )}
      <ImageContainer>
        <img src={`https:${product.image}`} alt={product[`name_${lang}`]} />
      </ImageContainer>
      <ProductInformationOverview>
        <ProductName>{product[`name_${lang}`]}</ProductName>
        <ProductPriceAndQuantity>
          <ProductPrice>
            <ProductPriceAfterDiscount>
              {getDeviceType() === "mobile" && (
                <span>{ordersTranslation.product.unitPrice}:</span>
              )}{" "}
              {productPrice.toLocaleString("de-DE")}
            </ProductPriceAfterDiscount>
            {product.isDiscount && product.discountPercentage && (
              <ProductPriceOrigin>
                <span>{product.unitPrice.toLocaleString("de-DE")}</span>
                <span>{-product.discountPercentage}%</span>
              </ProductPriceOrigin>
            )}
          </ProductPrice>
        </ProductPriceAndQuantity>
        {getDeviceType() === "mobile" && (
          <ProductQuantity>
            {ordersTranslation.product.quantity}: {product.quantity}
          </ProductQuantity>
        )}
        <ProductTotalPrice>
          {" "}
          {getDeviceType() === "mobile" && (
            <span>{ordersTranslation.product.totalPrice}:</span>
          )}{" "}
          {(product.quantity * productPrice).toLocaleString("de-DE", {
            style: "currency",
            currency: "vnd",
          })}
        </ProductTotalPrice>
      </ProductInformationOverview>
    </Wrapper>
  )
}

export default CheckoutProductItem
