import React, { useState } from "react"
import {
  Wrapper,
  Title,
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  CategoriesContainer,
  ListItemExpand
} from "./styles/PortfoliosList.styles"
import useLanguage from "../Global/useLanguage"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { useThemeUI } from "theme-ui"
import CategoriesList from "./CategoriesList"
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"
const queryPortfolios = graphql`
  query {
    portfoliosList: allContentfulPortfolio {
      edges {
        node {
          contentful_id
          nameVi
          nameEn
          slug
          image {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          category {
            contentful_id
            nameVi
            nameEn
            slug
            image {
              title
              fluid {
                ...GatsbyContentfulFluid
              }
            }            
          }
          categories {
            contentful_id
            nameVi
            nameEn
            slug
            image {
              title
              fluid {
                ...GatsbyContentfulFluid
              }
            }   
            productGroups{
              contentful_id
              nameVi
              nameEn
              slug
            }         
          }
        }
      }
    }
  }
`
const PortfoliosList = () => {
  const { i18n, lang } = useLanguage()
  const query = useStaticQuery(queryPortfolios)
  const { theme, colorMode } = useThemeUI()
  const portfolios = query.portfoliosList.edges
  const { portfolio: portfolioTranslation } = i18n.store.data[
    lang
  ].translation.shop
  const initialSelectedPortfolio = {id :null, x : 0, y : 0};
  const [selectedPortfolio, setSelectedPortfolio] = useState(initialSelectedPortfolio)
  const onMouseEnterListItem = (e,id) => {
    
    setSelectedPortfolio({
      id, 
      x : e.clientX, 
      y :document.getElementById(id).getBoundingClientRect().top
    })
  }
  const onMouseLeaveListItem = () => {
    setSelectedPortfolio(initialSelectedPortfolio)
  }      
  return (
    <Wrapper>
      <Title>{portfolioTranslation.title}</Title>
      {portfolios?.length ? (
        <List
          theme={theme.colors[colorMode]}
          onMouseLeave={onMouseLeaveListItem}
        >
          {portfolios.map(({ node: portfolio }) => (
            <ListItem
              onMouseEnter={(e) => onMouseEnterListItem(e,portfolio.contentful_id)}
              key={portfolio.contentful_id}
              theme={theme.colors[colorMode]}
              id={portfolio.contentful_id}
              active={portfolio.contentful_id===selectedPortfolio.id}
            >
              <ListItemIcon>
                <Image
                  fluid={portfolio?.image?.fluid}
                  alt={portfolio?.image?.title}
                />
              </ListItemIcon>
              <ListItemText>{portfolio.nameVi}</ListItemText>
              <ListItemExpand>{portfolio.contentful_id === selectedPortfolio.id ? <FaChevronLeft/> : <FaChevronRight/>}</ListItemExpand>
            </ListItem>
          ))}
          {selectedPortfolio.id && (
            <CategoriesContainer x={selectedPortfolio.x} y={selectedPortfolio.y}>
              <CategoriesList                
                categories={
                  portfolios.find(
                    ({ node }) => node.contentful_id === selectedPortfolio.id
                  ).node.categories
                }
              />
            </CategoriesContainer>
          )}
        </List>
      ) : null}
    </Wrapper>
  )
}

export default PortfoliosList
