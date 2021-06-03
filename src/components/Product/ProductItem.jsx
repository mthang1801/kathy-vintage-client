import React, { useState } from "react"
import {
  Wrapper,
  ImageContainer,
  ProductText,
  ProductName,
  ProductPrice,
  DiscountBrand,
} from "./styles/ProductItem.styles"
import _ from "lodash"
import {StaticImage} from "gatsby-plugin-image"
import useLanguage from "../Global/useLanguage"
import { useTheme } from "../../theme"
const ProductItem = ({ product }) => {
  const [imageFluid, setImageFluid] = useState(product.images[0].fluid)
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
    product[`name_${lang}`].length > 60
      ? product[`name_${lang}`].slice(0, 60) + "..."
      : product[`name_${lang}`]

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
      <ImageContainer
        imageHover={`https:${product.images[0].fluid.src}`}
        imageMouseout={`https:${product.images[1].fluid.src}`}
      />       
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
