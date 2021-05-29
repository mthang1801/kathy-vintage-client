import React from "react"
import Layout from "../containers/Layout"
import { graphql } from "gatsby"
import BreadcrumbNavigation from "../components/BreadcrumbNavigation/BreadcrumbNavigation"
import LayoutTemplate from "./layout.template"
import SEO from "../components/SEO/SEO"
const CategoryTemplate = props => {
  const { portfolio, category } = props.data
  return (
    <>
    <SEO title={props.data.category.name_vi} description={`Danh mục sản phẩm từ ${props.data.category.name_vi}`}/>
    <Layout>
      <BreadcrumbNavigation contenfulData={[portfolio, category]} />
      <LayoutTemplate data={props.data} pageLocation="category" />
    </Layout>
    </>
  )
}

export const query = graphql`
  query($categoryId: String!) {
    category: contentfulCategory(contentful_id: { eq: $categoryId }) {
      contentful_id
      name_vi
      name_en
      slug
    }

    portfolio: contentfulPortfolio(
      category: { elemMatch: { contentful_id: { eq: $categoryId } } }
    ) {
      contentful_id
      name_vi
      name_en
      slug
    }

    productGroups: allContentfulProductGroup(
      filter: { category: { contentful_id: { eq: $categoryId } } }
    ) {
      edges {
        node {
          contentful_id
          name_vi
          name_en
          slug
        }
      }
    }

    products: allContentfulProduct(
      filter: { category: { contentful_id: { eq: $categoryId } } }
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
      filter: { category: { contentful_id: { eq: $categoryId } } }
    ) {
      min(field: unitPrice)
      max(field: unitPrice)
    }
    manufactors: allContentfulProduct(
      filter: { category: { contentful_id: { eq: $categoryId } } }
    ) {
      distinct(field: manufactor)
    }
  }
`

export default CategoryTemplate
