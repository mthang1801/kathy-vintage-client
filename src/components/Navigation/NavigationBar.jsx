import React, { useState } from "react"
import {
  Wrapper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Setting,
  CategoriesContainer,
} from "./styles/NavigationBar.styles"
import { useTheme } from "../../theme"
import useLanguage from "../Global/useLanguage"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import SettingDialog from "../Setting/SettingDialog"
import CategoriesDropdown from "../Dropdown/CategoriesDropdown"
const NavigationBar = () => {
  const { theme } = useTheme()
  const { i18n, lang } = useLanguage()
  const { navigations } = i18n.store.data[lang].translation
  const { portfoliosList } = useStaticQuery(PORFOLIOS_LIST)
  const [openSetting, setOpenSetting] = useState(false)
  const initialPortfolio = { id: null, x: 0, y: 0 }
  const [selectedPortfolio, setSelectedPortfolio] = useState(initialPortfolio)
  const onMouseEnterPortfolioItem = id => {
    setSelectedPortfolio(prevState => ({ ...prevState, id }))
  }
  return (
    <Wrapper theme={theme}>
      <SettingDialog open={openSetting} setOpen={setOpenSetting} />
      <List>
        {/* Home page */}
        <ListItem to={navigations.home.path} theme={theme}>
          <ListItemIcon>{navigations.home.icon}</ListItemIcon>
          <ListItemText>{navigations.home.name}</ListItemText>
        </ListItem>
        {portfoliosList.edges.map(({ node: portfolio }) => (
          <ListItem
            key={portfolio.contentful_id}
            to={portfolio.slug}
            theme={theme}
            onMouseEnter={() =>
              onMouseEnterPortfolioItem(portfolio.contentful_id)
            }
            onMouseLeave={() => setSelectedPortfolio(initialPortfolio)}
          >
            <ListItemIcon>
              <Image
                fluid={portfolio?.image?.fluid}
                alt={portfolio?.image?.title}
              />
            </ListItemIcon>
            <ListItemText>{lang === "en" ? portfolio.nameEn : portfolio.nameVi}</ListItemText>
            {portfolio.contentful_id === selectedPortfolio.id && (
              <CategoriesContainer>
                <CategoriesDropdown
                  parentSlug={portfolio.slug}
                  categories={portfolio.categories}
                />
              </CategoriesContainer>
            )}
          </ListItem>
        ))}
        {/* Contact */}
        <ListItem to={navigations.contact.path} theme={theme}>
          <ListItemIcon>{navigations.contact.icon}</ListItemIcon>
          <ListItemText>{navigations.contact.name}</ListItemText>
        </ListItem>
        {/* Setting */}
        <Setting
          theme={theme}
          onClick={() => setOpenSetting(true)}
        >
          <ListItemIcon>{navigations.setting.icon}</ListItemIcon>
          <ListItemText>{navigations.setting.name}</ListItemText>
        </Setting>
      </List>
    </Wrapper>
  )
}

const PORFOLIOS_LIST = graphql`
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
            productGroups {
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

export default NavigationBar
