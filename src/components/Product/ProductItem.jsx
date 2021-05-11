import React from "react"
import {
  Wrapper,
  ImageContainer,
  ProductText,
  ProductName,
  ProductPrice,
  DiscountBrand,
} from "./styles/ProductItem.styles"
import _ from "lodash"
import Image from "gatsby-image"
import useLanguage from "../Global/useLanguage"
import { useTheme } from "../../theme"
const ProductItem = ({ product }) => {
  
  const { lang } = useLanguage()
  const { theme } = useTheme()
  const productPrice =
    +product?.discountPercentage > 0 &&
    +product?.discountPercentage < 100 &&
    product.isDiscount
      ? (product.unitPrice * (100 - parseFloat(product.discountPercentage))) /
        100
      : product.unitPrice

  const productName =
    lang === "en"
      ? product.nameEn.length > 60
        ? product.nameEn.slice(0, 60) + "..."
        : product.nameEn
      : product.nameVi.length > 60
      ? product.nameVi.slice(0, 60) + "..."
      : product.nameVi

  const path =
    product?.portfolio?.slug &&
    product?.category?.slug &&
    product?.productGroup?.slug
      ? `/${product.portfolio.slug}/${product.category.slug}/${product.productGroup.slug}/${product.slug}`
      : `/products/${product.slug}`
  return (
    <Wrapper theme={theme} to={path}>
      {product.isDiscount && product.discountPercentage && (
        <DiscountBrand>{-product.discountPercentage}%</DiscountBrand>
      )}
      <ImageContainer>
        <Image fluid={product.images[0]?.fluid} alt={product.nameVi} />
      </ImageContainer>
      <ProductText>
        <ProductName>{productName}</ProductName>
        <ProductPrice>
          {productPrice.toLocaleString("de-DE", {
            style: "currency",
            currency: "VND",
          })}
        </ProductPrice>
      </ProductText>
    </Wrapper>
  )
}

export default ProductItem
