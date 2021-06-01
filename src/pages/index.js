import React from "react"
import Layout from "../containers/Layout"
import Banners from "../components/Carousel/Banners"
import Categories from "../components/Carousel/Categories"
import { graphql, useStaticQuery } from "gatsby"
import ProductsList from "../components/Product/ProductsList"
import useLanguage from "../components/Global/useLanguage"
import Seo from "../components/Seo/Seo"
function Home() {
  let { newProducts, recommendedProducts } = useStaticQuery(query)
  const { i18n, lang } = useLanguage()
  const { product, seo } = i18n.store.data[lang].translation
  //format static data
  const newProductsEdges = newProducts?.edges?.map(({ node }) => node)
  const recommendedProductsEdges = recommendedProducts?.edges?.map(({node}) => node)
  return (
    <>    
     <Seo title="My Amazing Gatsby App" />
    <Layout>
      <Banners />
      <Categories />
      {newProductsEdges?.length ? (
        <ProductsList
          header={product.newProducts}
          products={newProductsEdges}          
          isAllProducts
        />
      ) : null}
      {recommendedProductsEdges?.length ? (
        <ProductsList
          header={product.recommendedProducts}
          products={recommendedProductsEdges}
          isAllProducts
        />
      ) : null}
    </Layout>
    </>
  )
}

const query = graphql`
  query {
    newProducts: allContentfulProduct(
      sort: { fields: updatedAt, order: DESC }
      limit: 30
    ) {
      edges {
        node {
          name_en
          name_vi
          slug
          unitPrice
          isDiscount
          discountPercentage
          shippingFee
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          portfolio{
            name_en
            name_vi
            slug
          }
          category{
            name_en
            name_vi
            slug
          }
          productGroup{
            name_en
            name_vi
            slug
          }
          updatedAt(formatString: "DD/MM/YYYY")
        }
      }
      totalCount
    }
    recommendedProducts: allContentfulProduct(
    	filter :{isRecommended :{eq : true}}
      sort: { fields: updatedAt, order: DESC }
      limit: 30
    ) {
      edges {
        node {
          name_en
          name_vi
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
            name_en
            name_vi
            slug
          }
          category{
            name_en
            name_vi
            slug
          }
          productGroup{
            name_en
            name_vi
            slug
          }
          updatedAt(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
  
`

export default Home
