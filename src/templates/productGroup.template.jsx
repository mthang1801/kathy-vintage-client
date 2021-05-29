import React from 'react'
import Layout from "../containers/Layout"
import {graphql} from "gatsby";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation/BreadcrumbNavigation"
import LayoutTemplate from "./layout.template"
import SEO from "../components/SEO/SEO"
const ProductGroupTemplate = (props) => {  
  const {productGroup} = props.data;
  
  return (
    <>
    <SEO title={props.data.productGroup.name_vi} description={`Danh mục sản phẩm từ ${props.data.productGroup.name_vi}`}/>
    <Layout>
      <BreadcrumbNavigation contenfulData={[productGroup.portfolio, productGroup.category, productGroup]}/>      
      <LayoutTemplate data={props.data} pageLocation="productGroup"/>
    </Layout>
    </>
  )
}
export const query = graphql`
  query($productGroupId: String!) {  

    productGroup: contentfulProductGroup(contentful_id: { eq: $productGroupId }) {
      contentful_id
      name_vi
      name_en
      slug
      category {
        contentful_id
        name_vi
        name_en
        slug
      }
      portfolio{
        contentful_id
        name_vi
        name_en
        slug
      }
    }

    products: allContentfulProduct(
      filter: { productGroup: { contentful_id: { eq: $productGroupId } } }
      sort: { fields: [isRecommended, updatedAt], order: [DESC, DESC] }
    ) {
      edges {
        node {
          name_en
          name_vi
          slug
          unitPrice
          isRecommended
          isDiscount
          discountPercentage
          shippingFee
          manufactor
        	origin
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
          updatedAt
        }
      }
    }
    productsPrice: allContentfulProduct(
      filter: { category: { contentful_id: { eq: $productGroupId } } }
    ) {
      min(field: unitPrice)
      max(field: unitPrice)
    }
    manufactors: allContentfulProduct(
      filter: { category: { contentful_id: { eq: $productGroupId } } }
    ) {
      distinct(field: manufactor)
    }
  }
`

export default ProductGroupTemplate
