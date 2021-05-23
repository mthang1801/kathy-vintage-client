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
  ProductTotalPrice
} from "./styles/ProductItem.styles"
import useLanguage from "../Global/useLanguage"
import { useTheme } from "../../theme"
import {navigate} from "gatsby"
const CheckoutProductItem = ({
  product,
  ordersTranslation
}) => {
  const { i18n, lang } = useLanguage()  
  const { theme } = useTheme()  
  const productPrice =
    product.isDiscount && product.discountPercentage
      ? (product.unitPrice * (100 - +product.discountPercentage)) / 100
      : product.unitPrice

  return (
    
      <Wrapper theme={theme} onClick={() => navigate(`/products/${product.slug}`)}>
        {window.innerWidth >= 768 && <ProductQuantity>{product.quantity} x</ProductQuantity>}
        <ImageContainer>
          <img
            src={`https:${product.image}`}
            alt={product[`name_${lang}`]}
          />
        </ImageContainer>
        <ProductInformationOverview>
          <ProductName>{product[`name_${lang}`]}</ProductName>
          <ProductPriceAndQuantity>
            <ProductPrice>
              <ProductPriceAfterDiscount>
                {window.innerWidth < 768 && <span>{ordersTranslation.product.unitPrice}:</span>} {productPrice.toLocaleString("de-DE")}
              </ProductPriceAfterDiscount>
              {product.isDiscount && product.discountPercentage && (
                <ProductPriceOrigin>
                  <span>{product.unitPrice.toLocaleString("de-DE")}</span>
                  <span>{-product.discountPercentage}%</span>
                </ProductPriceOrigin>
              )}              
            </ProductPrice>                        
          </ProductPriceAndQuantity>          
          {window.innerWidth < 768 && <ProductQuantity>{ordersTranslation.product.quantity}: {product.quantity}</ProductQuantity>}
          <ProductTotalPrice>  {window.innerWidth < 768 && <span>{ordersTranslation.product.totalPrice}:</span>} {(product.quantity * productPrice).toLocaleString("de-DE", {style:"currency", currency: "vnd"})}</ProductTotalPrice>
        </ProductInformationOverview>       
      </Wrapper>     
    
  )
}

export default CheckoutProductItem
