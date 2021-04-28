import React, { useState, useEffect } from "react"
import {
  MobileWrapper,
  TabletWrapper,
  ListitemIcon,
  ListItem,
  ListItemImage,
  ListItemText,
  useStyles,
  ViewPort,
  CategoriesList,
} from "./styles/SmallViewportPortfolios.styles"
import Image from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import useLanguage from "../Global/useLanguage"
import ChevronRight from "@material-ui/icons/ChevronRight"
import ChevronLeft from "@material-ui/icons/ChevronLeft"
import Accordion from "@material-ui/core/Accordion"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import SmallViewportCategories from "./SmallViewportCategories"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
const QUERY_PORTFOLIOS = graphql`
query FetchPortfolios {
  allContentfulPortfolio {
    edges {
      node {
        contentful_id
        nameVi
        nameEn
        slug
        image {
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
      }
    }
  }
}
`
const MobilePortfolio = ({ open }) => {
  const query = useStaticQuery(QUERY_PORTFOLIOS)
  const classes = useStyles()
  const initialSelectedPortfolio = {id : null, x : 0, y : 0}
  const [expanded, setExpanded] = useState(false)
  const [selectedPortfolio, setSelectedPortfolio] = useState(initialSelectedPortfolio)
  const portfolios = query.allContentfulPortfolio.edges
  const { lang } = useLanguage()
  console.log(lang)
  const handleChange = contentful_id => (e, newExpanded) => {
    setExpanded(newExpanded ? contentful_id : false)
  }

  
  const onSelectedPortfolio = (e, id) => {
    if(selectedPortfolio.id === id){
      return setSelectedPortfolio(initialSelectedPortfolio)
    }
    setSelectedPortfolio({
      id,
      x: e.clientX,
      y: e.clientY,
    })
  }

  useEffect(() => {
    if(!open){
      setExpanded(false);
      setSelectedPortfolio(initialSelectedPortfolio)
    }
  },[open])
  
 
  return (
    <>
      <MobileWrapper open={open}>
        {portfolios?.length
          ? portfolios.map(({ node }, index) => (
              <ViewPort key={node.contentful_id}>
                <Accordion
                  expanded={node.contentful_id === expanded}
                  onChange={handleChange(node.contentful_id)}
                  className={classes.accordion}
                  style={{ padding: 0 }}
                >
                  <AccordionSummary>
                    <ListItem>
                      <ListItemImage>
                        <Image fluid={node.image.fluid} alt={node.nameVi} />
                      </ListItemImage>
                      <ListItemText>{node.nameVi}</ListItemText>
                      <ListitemIcon>
                        <ExpandMoreIcon />
                      </ListitemIcon>
                    </ListItem>
                  </AccordionSummary>

                  <AccordionDetails className={classes.accordionDetails}>
                    {node?.category?.length
                      ? node.category.map(category => (
                          <ListItem key={category.contentful_id}>
                            <ListItemImage>
                              <Image
                                fluid={category?.image?.fluid}
                                alt={category?.image?.title}
                              />
                            </ListItemImage>
                            <ListItemText>{category.nameVi}</ListItemText>
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
          ? portfolios.map(({ node }, index) => (
              <ViewPort key={node.contentful_id}>
                <ListItem>
                  <ListItemImage>
                    <Image fluid={node.image.fluid} alt={node.nameVi} />
                  </ListItemImage>
                  <ListItemText>{lang === "en" ? node.nameEn : lang === "vi" ? node.nameVi : ""}</ListItemText>
                  <ListitemIcon
                    onClick={e => onSelectedPortfolio(e, node.contentful_id)}
                  >
                    {selectedPortfolio.id === node.contentful_id ? <ChevronLeft/> : <ChevronRight /> }
                  </ListitemIcon>
                </ListItem>
                {selectedPortfolio.id === node.contentful_id && (
                  <CategoriesList
                    x={selectedPortfolio.x}
                    y={selectedPortfolio.y}
                    numberOfItems={5}
                  >
                    <SmallViewportCategories categories={node.category} />
                  </CategoriesList>
                )}
              </ViewPort>
            ))
          : null}
      </TabletWrapper>
    </>
  )
}

export default MobilePortfolio
