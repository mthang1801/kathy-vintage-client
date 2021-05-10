import React from "react"
import Layout from "../containers/Layout"
import Banners from "../components/Carousel/Banners"
import Categories from "../components/Carousel/Categories"
import {graphql, useStaticQuery} from "gatsby"
import ProductsList from "../components/Product/ProductsList"
import useLanguage from "../components/Global/useLanguage"
function Home() {
  let {newProducts} = useStaticQuery(query);
  const {i18n,lang} = useLanguage();
  const {product } = i18n.store.data[lang].translation
  //format static data
  newProducts = newProducts.edges.map(({node})=> node);

  return (
    <Layout>
      <Banners/>
      <Categories/>
      <ProductsList header={product.newProducts} products={newProducts} />
    </Layout>
  )
}

const query = graphql`
  query{
    newProducts : allContentfulProduct(sort:{fields : updatedAt, order :DESC}, limit : 15){
      edges{
        node{
          contentful_id
          nameEn
          nameVi        
          slug
          unitPrice
          isDiscount
          discountPercentage        
          shippingFee
          images{
            fluid{
              ...GatsbyContentfulFluid
            }
          }
          updatedAt(formatString : "DD/MM/YYYY")
        }
      }
    }
  }
`

export default Home