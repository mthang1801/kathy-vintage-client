import React from "react"
import Layout from "../containers/Layout"
import { graphql } from "gatsby"
import BreadcrumbNavigation from "../components/BreadcrumbNavigation/BreadcrumbNavigation"
import LayoutTemplate from "./layout.template"
import SEO from "../components/SEO/SEO"
const PortfolioTemplate = props => {
  return (
    <>
    <SEO title={props.data.portfolio.name_vi} description={`Danh mục sản phẩm từ ${props.data.portfolio.name_vi}`}/>
    <Layout>
      <BreadcrumbNavigation contenfulData={[props.data.portfolio]} />
      <LayoutTemplate data={props.data} pageLocation="portfolio"/>      
    </Layout>
    </>
  )
}

export const query = graphql`
  query($portfolioId: String!) {
    portfolio: contentfulPortfolio(contentful_id: { eq: $portfolioId }) {
      contentful_id
      name_vi
      name_en
      slug
      category {
        contentful_id
        name_en
        name_vi
        slug
      }
    }
    categories: allContentfulCategory(
      filter: { portfolio: { contentful_id: { eq: $portfolioId } } }
    ) {
      edges {
        node {
          contentful_id
          name_en
          name_vi
          slug
        }
      }
    }
    products: allContentfulProduct(
      filter: { portfolio: { contentful_id: { eq: $portfolioId } } },
      sort :{fields :[isRecommended, updatedAt], order :[DESC, DESC]}
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
    productsPrice :  allContentfulProduct(filter :{portfolio :{contentful_id :{eq : $portfolioId}}}){
      min(field : unitPrice) 
      max(field : unitPrice)
    }
    manufactors : allContentfulProduct(filter :{portfolio :{contentful_id :{eq : $portfolioId}}}){
      distinct(field :manufactor)
    }
    
  }
`

export default PortfolioTemplate
