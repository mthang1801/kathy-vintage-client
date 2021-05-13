import React, { useState } from "react"
import {
  Wrapper,
  Title,
  InitialPrice,
  OfficialPrice,
  DiscountPercentage,
  Flex,
  Grid,
  CustomButton,
  ProductColorItem
} from "./styles/ProductInfo.styles"
import Button from "@material-ui/core/Button"
import useLanguage from "../Global/useLanguage"
import QuantityControl from "../Controls/QuantityControl"
import { useTheme } from "../../theme"
const ProductInfo = ({ product }) => {
  const {
    contentful_id,
    slug,
    name_vi,
    name_en,
    status,
    quantity,
    unitPrice,
    isRecommended,
    shippingFee,
    origin,
    manufactor,
    sizes,
    isDiscount,
    discountPercentage,
    colors,  
  } = product
  const { theme } = useTheme()
  const { i18n, lang } = useLanguage()
  const { productPage } = i18n.store.data[lang].translation.product
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [selectedColor, setSelectedColor ] = useState(colors ? colors[0].color : null)
  const [productQuantity, setProductQuantity] = useState(0)
  const productPrice =
    isDiscount && discountPercentage
      ? (unitPrice * (100 - parseFloat(discountPercentage))) / 100
      : unitPrice
  const onChangeColor = color => {
    setSelectedColor(color);
  }
  return (
    <Wrapper theme={theme}>
      <Title>{lang === "en" ? name_en : name_vi}</Title>
      <div>
        {manufactor && (
          <span>
            {productPage.manufactor} : <strong>{manufactor}</strong>
          </span>
        )}
        {origin && (
          <span style={{ marginLeft: "2rem" }}>
            {productPage.origin} : <strong>{origin}</strong>
          </span>
        )}
      </div>
      {/* Price component */}
      <Flex spacing={0.5} theme={theme} style={{padding : "1rem"}}>
        <OfficialPrice>
          {productPrice.toLocaleString("de-DE", {
            style: "currency",
            currency: "VND",
          })}
        </OfficialPrice>
        {isDiscount && discountPercentage && (
          <>
            <InitialPrice>
              {unitPrice.toLocaleString("de-DE", {
                style: "currency",
                currency: "VND",
              })}
            </InitialPrice>
            <DiscountPercentage>{-discountPercentage}%</DiscountPercentage>
          </>
        )}
      </Flex>
      {/* Colors product */}
      {colors?.length ? (
        <>
        <Flex>
          <span>{productPage.colors}:</span>
        </Flex>
        <Grid>
          {colors.map(({color, image}) => (
            <ProductColorItem theme={theme} active={selectedColor === color} onClick={() => onChangeColor(color)}>
              <img src={image} alt={color}/>
              <span>{color}</span>
            </ProductColorItem>
          ))}
        </Grid>
        </>
      ) : null}
      {/* Sizes product */}
      <Flex spacing={0.5}>
        <span>{productPage.size}: </span>
        <span>
          <strong>{selectedSize}</strong>
        </span>
      </Flex>
      <Grid>
        {sizes.map(size => (
          <Button
            color="primary"
            variant={selectedSize === size ? "contained" : "outlined"}
            onClick={() => setSelectedSize(size)}
          >
            {size}
          </Button>
        ))}
      </Grid>
      {/* Quantity Control*/}
      <Flex>
        <span>{productPage.quantity}:</span>
      </Flex>
      <QuantityControl
        quantity={productQuantity}
        setQuantity={setProductQuantity}
      />
      <Flex spacing={2} style={{ marginTop: "2rem" }}>
        <CustomButton color="primary" variant="contained" size="large">
          <span>{productPage.buttonAddToCart.icon}</span>
          <span>{productPage.buttonAddToCart.name}</span>
        </CustomButton>
        <CustomButton color="secondary" variant="contained" size="large">
          <span>{productPage.buttonPurchase.icon}</span>
          <span>{productPage.buttonPurchase.name}</span>
        </CustomButton>
      </Flex>
    </Wrapper>
  )
}

export default ProductInfo