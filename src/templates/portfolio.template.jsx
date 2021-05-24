import React from "react"
import Layout from "../containers/Layout"
import { graphql } from "gatsby"
import BreadcrumbNavigation from "../components/BreadcrumbNavigation/BreadcrumbNavigation"
import {
  ContentContainer,
  Sidebar,
  TemplateViewPortRight,
} from "../styles/template.styles"
import SidebarNavigations from "../components/Sidebar/SidebarNavigations"
import SidebarFilter from "../components/Sidebar/SidebarFilter"
import useLanguage from "../components/Global/useLanguage"
import { useTheme } from "../theme"

const PortfolioTemplate = props => {
  const {
    pageContext: { portfolioId },
    data: { portfolio, categories },
  } = props
  const { i18n, lang } = useLanguage()
  const { template} = i18n.store.data[
    lang
  ].translation.page;
  const { theme } = useTheme()
  
  return (
    <Layout>
      <BreadcrumbNavigation contenfulData={[portfolio]} />
      <ContentContainer>
        <Sidebar theme={theme}>
          <SidebarNavigations
            lang={lang}
            slugParent={`/${portfolio.slug}`}
            data={categories.edges.map(({ node: category }) => category)}
            title={template?.sidebar?.navigation?.title}
          />
          <SidebarFilter
            data={props.data}
            templateTranslation={template}
            products={categories.edges.map(({ node: category }) => category)}
          />
        </Sidebar>
        <TemplateViewPortRight></TemplateViewPortRight>
      </ContentContainer>
    </Layout>
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
      filter: { portfolio: { contentful_id: { eq: $portfolioId } } }
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
