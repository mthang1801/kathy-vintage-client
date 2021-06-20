import React from "react"
import {
  Wrapper,
  Title,
  StyledTitle,
  Header,
  ReadMoreLink,
  Body,
  Footer
} from "./styles/ProductsList.styles"
import { useTheme } from "../../theme"
import {useLanguage} from "../../locales"
import ProductItem from "./ProductItem"
import { v4 as uuidv4 } from 'uuid';
import {getDeviceType} from "../../utils/getDeviceType"
const ProductsList = ({ header, products, isAllProducts = true, currentPage, numPage }) => {
  const { theme } = useTheme()
  const { translation : {others : {seeAll}} } = useLanguage()  
  products =
  getDeviceType() === "mobile"
      ? products.filter((_, idx) => idx < 10).map(product => product)
      : products
  
  return (
    <Wrapper theme={theme}>
      {header && (
        <Header>
          <Title>
            {header.styledTitle && (
              <StyledTitle>{header.styledTitle}</StyledTitle>
            )}{" "}
            {header.title}
          </Title>
          {!isAllProducts && (
            <ReadMoreLink to={header.path}>
              <span>{seeAll}</span> <span>{header.pathIcon}</span>
            </ReadMoreLink>
          )}
        </Header>
      )}
      {products?.length ? (
        <Body>
          {" "}
          {products.map(product => (
            <ProductItem
              key={`${uuidv4()}`}
              product={product}
            />
          ))}
        </Body>
      ) : null}      
    </Wrapper>
  )
}

export default ProductsList
