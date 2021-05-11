import React from "react"
import Layout from "../containers/Layout"
import { graphql, useStaticQuery } from "gatsby"
import ProductsList from "../components/Product/ProductsList"
import useLanguage from "../components/Global/useLanguage"
import { ProductsWrapper } from "./styles/new-products.styles"
import BreadcrumbNavigation from "../components/BreadcrumbNavigation/BreadcrumbNavigation"
function NewProductsPage() {
  let { newProducts } = useStaticQuery(query)  
  const { i18n, lang } = useLanguage()
  const { product } = i18n.store.data[lang].translation
  //format static data
  const newProductsEdges = newProducts?.edges?.map(({ node }) => node)
  const newProductsTotalCount = newProducts?.totalCount  
  return (
    <Layout>
      <BreadcrumbNavigation staticData={[product.newProducts]}/>
      <ProductsWrapper>
        {newProductsEdges?.length ? (
          <ProductsList
            header={product.newProducts}
            products={newProductsEdges}
            isAllProducts={newProductsTotalCount === newProductsEdges.length}
          />
        ) : null}
      </ProductsWrapper>
    </Layout>
  )
}

const query = graphql`
  query {
    newProducts: allContentfulProduct(
      sort: { fields: updatedAt, order: DESC }
    ) {
      edges {
        node {
          nameEn
          nameVi
          slug
          unitPrice
          isDiscount
          discountPercentage
          shippingFee
          images {
            fluid {
              src
            }
          }
          portfolio{
            nameEn
            nameVi
            slug
          }
          category{
            nameEn
            nameVi
            slug
          }
          productGroup{
            nameEn
            nameVi
            slug
          }
          updatedAt(formatString: "DD/MM/YYYY")
        }
      }
      totalCount
    }
  }
`

export default NewProductsPage
