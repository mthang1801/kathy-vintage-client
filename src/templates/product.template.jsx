import React from "react"
import Layout from "../containers/Layout"
import BreadcrumbNavigation from "../components/BreadcrumbNavigation/BreadcrumbNavigation"
import { ProductOverviewContainer, Box } from "./styles/product.template.styles"
import { graphql } from "gatsby"
import useLanguage from "../components/Global/useLanguage"
import { useTheme } from "../theme"
import ProductImages from "../components/Product/ProductImages"
import ProductContent from "../components/Product/ProductContent"
import ProductInformation from "../components/Product/ProductInformation"
import ProductDescription from "../components/Product/ProductDescription"

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
      <Box theme={theme}>
        <ProductInformation product={product}/>
      </Box>
      <Box theme={theme}>
        <ProductDescription product={product}/>
      </Box>
    </Layout>
  )
}

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
      information_vi{
        key
        value
        values
      }
      information_en{
        key
        value
        values
      }
      description_vi{
        description_vi
      }
      description_en{
        description_en
      }
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

export default ProductProduct
