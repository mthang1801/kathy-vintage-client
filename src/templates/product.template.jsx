import React, { useState } from "react"
import Layout from "../containers/Layout"
import BreadcrumbNavigation from "../components/BreadcrumbNavigation/BreadcrumbNavigation"
import { ProductOverviewContainer } from "./styles/product.template.styles"
import { graphql } from "gatsby"
import useLanguage from "../components/Global/useLanguage"
import { useTheme } from "../theme"
import Button from "@material-ui/core/Button"
import ProductImages from "../components/Product/ProductImages"
import ProductContent from "../components/Product/ProductContent"
export const query = graphql`
  query($contentful_id: String) {
    product: contentfulProduct(contentful_id: { eq: $contentful_id }) {
      contentful_id
      slug
      name_vi
      name_en
      status
      slug
      quantity
      unitPrice
      isRecommended
      shippingFee
      origin
      manufactor
      sizes
      isDiscount
      discountPercentage
      colors{
        color 
        image
      }
      images {
        file {
          url
          details {
            image {
              width
              height
            }
          }
        }
      }
      portfolio {
        name_en
        name_vi
        slug
      }
      category {
        name_en
        name_vi
        slug
      }
      productGroup {
        name_en
        name_vi
        slug
      }
      createdAt
      updatedAt
    }
  }
`

const ProductProduct = props => {
  const { product } = props.data   
  const { i18n, lang } = useLanguage()
  const {theme} = useTheme();
  const { productPage } = i18n.store.data[lang].translation.product
  const { portfolio, category, productGroup, images } = product

  return (
    <Layout>
      <BreadcrumbNavigation
        contenfulData={[portfolio, category, productGroup, product]}
      />
      <ProductOverviewContainer theme={theme}>
        <ProductImages images={images} />
        <ProductContent product={product} />
      </ProductOverviewContainer>
    </Layout>
  )
}

export default ProductProduct
