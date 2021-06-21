import React, { useEffect } from "react"
import Seo from "../components/Seo/Seo"
import Layout from "../containers/Layout"
import Banners from "../components/Carousel/Banners"
import Categories from "../components/Carousel/Categories"
import { graphql, useStaticQuery } from "gatsby"
import ProductsList from "../components/Product/ProductsList"
import { useLanguage } from "../locales"
import { createStructuredSelector } from "reselect"
import {
  selectBestSellProducts,
  selectProductsLoading,
  selectFetchedProducts,
} from "../redux/products/products.selector"
import { fetchBestSellProducts } from "../redux/products/products.actions"
import { closeCart } from "../redux/cart/cart.actions"
import { connect } from "react-redux"
import HomeProductsList from "../components/UI/Lab/Skeleton/HomeProductsList"
function Home({
  fetchBestSellProducts,
  productsLoading,
  bestSellProducts,
  productsFetched,
  closeCart,
}) {
  let { newProducts, recommendedProducts } = useStaticQuery(query)
  const {
    translation: { product, seo },
  } = useLanguage()
  //format static data
  const newProductsEdges = newProducts?.edges?.map(({ node }) => node)
  const recommendedProductsEdges = recommendedProducts?.edges?.map(
    ({ node }) => node
  )

  useEffect(() => {
    if (!productsFetched) {
      fetchBestSellProducts()
    }
  }, [fetchBestSellProducts, productsFetched])
  useEffect(() => {
    closeCart()
  }, [])
  return (
    <Layout>
      <Seo title={seo.home} description={seo.home} />
      <Banners />
      <Categories />
      {productsLoading ? (
        <HomeProductsList />
      ) : bestSellProducts?.length ? (
        <ProductsList
          header={product.bestSellProducts}
          products={bestSellProducts}
          isAllProducts
        />
      ) : null}
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
          images {
            fluid {
              ...GatsbyContentfulFluid
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
          updatedAt(formatString: "DD/MM/YYYY")
        }
      }
      totalCount
    }
    recommendedProducts: allContentfulProduct(
      filter: { isRecommended: { eq: true } }
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
          images {
            fluid {
              src
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
          updatedAt(formatString: "DD/MM/YYYY")
        }
      }
    }
  }
`

const mapStateToProps = createStructuredSelector({
  bestSellProducts: selectBestSellProducts,
  productsLoading: selectProductsLoading,
  productsFetched: selectFetchedProducts,
})

const mapDispatchToProps = dispatch => ({
  fetchBestSellProducts: () => dispatch(fetchBestSellProducts()),
  closeCart: () => dispatch(closeCart()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
