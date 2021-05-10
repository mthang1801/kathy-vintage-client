import React from "react"
import {
  Wrapper,
  Title,
  StyledTitle,
  Header,
  ReadMoreLink,
  Body,
} from "./styles/ProductsList.styles"
import { useTheme } from "../../theme"
import useLanguage from "../Global/useLanguage"
import ProductItem from "./ProductItem"
const ProductsList = ({ header, products }) => {
  const { theme } = useTheme()
  const { i18n, lang } = useLanguage()
  const {
    others: { seeAll },
  } = i18n.store.data[lang].translation
  products = window.innerWidth < 500 ? products.filter((_,idx) => idx < 10).map(product => product) : products;
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
          <ReadMoreLink to={header.path}>
            <span>{seeAll}</span> <span>{header.pathIcon}</span>
          </ReadMoreLink>
        </Header>
      )}
      {products?.length ? (
        <Body>
          {" "}
          {products.map(product => (
            <ProductItem
              key={`${header.title.slice(0, 20)}-${product.contentful_id}`}
              product={product}
            />
          ))}
        </Body>
      ) : null}
    </Wrapper>
  )
}

export default ProductsList
