import React, { useState, useEffect } from "react"
import {
  MobileWrapper,
  TabletWrapper,
  ListItemIcon,
  ListItem,
  ListItemImage,
  ListItemText,
  useStyles,
  ViewPort,
  CategoriesList,
  ListItemContainer,
} from "./styles/DrawerPortfoliosDropdown.styles"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import useLanguage from "../Global/useLanguage"
import ChevronRight from "@material-ui/icons/ChevronRight"
import ChevronLeft from "@material-ui/icons/ChevronLeft"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import DrawerCategoriesDropdown from "./DrawerCategoriesDropdown"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { navigate } from "gatsby"
const QUERY_PORTFOLIOS = graphql`
  query FetchPortfolios {
    allContentfulPortfolio {
      edges {
        node {
          contentful_id
          name_vi
          name_en
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          categories {
            contentful_id
            name_vi
            name_en
            slug
            image {
              title
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
`
const PorfoliosDropdown = ({ open, handleDrawerClose, onNavigate }) => {
  const query = useStaticQuery(QUERY_PORTFOLIOS)
  const classes = useStyles()
  const initialSelectedPortfolio = { id: null, x: 0, y: 0 }
  const [expanded, setExpanded] = useState(false)
  const [selectedPortfolio, setSelectedPortfolio] = useState(
    initialSelectedPortfolio
  )
  const portfolios = query.allContentfulPortfolio.edges
  const { lang } = useLanguage()

  const handleChange = contentful_id => (e, newExpanded) => {
    setExpanded(newExpanded ? contentful_id : false)
  }
  const onSelectedPortfolio = (e, id) => {
    if (selectedPortfolio.id === id) {
      return setSelectedPortfolio(initialSelectedPortfolio)
    }
    setSelectedPortfolio({
      id,
      x: e.clientX,
      y: e.clientY,
    })
  }
  console.log(selectedPortfolio)

  useEffect(() => {
    if (!open) {
      setExpanded(false)
      setSelectedPortfolio(initialSelectedPortfolio)
    }
  }, [open])

  return (
    <>
      <MobileWrapper open={open}>
        {portfolios?.length
          ? portfolios.map(({ node: portfolio }, index) => (
              <ViewPort key={portfolio.contentful_id}>
                <Accordion
                  expanded={portfolio.contentful_id === expanded}
                  onChange={handleChange(portfolio.contentful_id)}
                  className={classes.accordion}
                  style={{ padding: 0 }}
                >
                  <AccordionSummary>
                    <ListItem>
                      <ListItemContainer
                        onClick={() => onNavigate(`/${portfolio.slug}`)}
                      >
                        <ListItemImage>
                          <Image
                            fluid={portfolio.image.fluid}
                            alt={portfolio[`name_${lang}`]}
                          />
                        </ListItemImage>
                        <ListItemText>{portfolio[`name_${lang}`]}</ListItemText>
                      </ListItemContainer>
                      <ListItemIcon>
                        <ExpandMoreIcon />
                      </ListItemIcon>
                    </ListItem>
                  </AccordionSummary>

                  <AccordionDetails className={classes.accordionDetails}>
                    {portfolio?.categories?.length
                      ? portfolio.categories.map(category => (
                          <ListItem
                            key={category.contentful_id}
                            onClick={() =>
                              onNavigate(`/${portfolio.slug}/${category.slug}`)
                            }
                          >
                            <ListItemImage>
                              <Image
                                fluid={category?.image?.fluid}
                                alt={category?.image?.title}
                              />
                            </ListItemImage>
                            <ListItemText>{category[`name_${lang}`]}</ListItemText>
                          </ListItem>
                        ))
                      : null}
                  </AccordionDetails>
                </Accordion>
              </ViewPort>
            ))
          : null}
      </MobileWrapper>
      <TabletWrapper open={open}>
        {portfolios?.length
          ? portfolios.map(({ node: portfolio }, index) => (
              <ViewPort key={portfolio.contentful_id}>
                <ListItem>
                  <ListItemContainer
                    onClick={() => onNavigate(`/${portfolio.slug}`)}
                  >
                    <ListItemImage>
                      <Image
                        fluid={portfolio.image.fluid}
                        alt={portfolio[`name_${lang}`]}
                      />
                    </ListItemImage>
                    <ListItemText>
                      {portfolio[`name_${lang}`]}
                    </ListItemText>
                  </ListItemContainer>
                  <ListItemIcon
                    onClick={e =>
                      onSelectedPortfolio(e, portfolio.contentful_id)
                    }
                  >
                    {selectedPortfolio.id === portfolio.contentful_id ? (
                      <ChevronLeft />
                    ) : (
                      <ChevronRight />
                    )}
                  </ListItemIcon>
                </ListItem>
                {selectedPortfolio.id === portfolio.contentful_id && (
                  <CategoriesList
                    x={selectedPortfolio.x}
                    y={selectedPortfolio.y}
                    numberOfItems={portfolio.categories.length}
                  >
                    <DrawerCategoriesDropdown
                      onNavigate={onNavigate}
                      categories={portfolio.categories}
                      portfolio={portfolio}
                    />
                  </CategoriesList>
                )}
              </ViewPort>
            ))
          : null}
      </TabletWrapper>
    </>
  )
}

export default PorfoliosDropdown
