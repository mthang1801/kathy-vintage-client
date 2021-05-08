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
import { useLocation } from "@reach/router"
import SettingDialog from "../Setting/SettingDialog"
import CategoriesDropdown from "../Dropdown/CategoriesDropdown"
const NavigationBar = () => {
  const { theme } = useTheme()
  const { i18n, lang } = useLanguage()
  const { navigations, portfolioIcons } = i18n.store.data[lang].translation
  const [activeItem, setActiveItem] = useState(null)
  const { pathname } = useLocation()
  const portfolioPath = pathname.split("/")[1]
  const { portfoliosList } = useStaticQuery(PORFOLIOS_LIST)
  const [openSetting, setOpenSetting] = useState(false)
  const initialPortfolio = { id: null, x: 0, y: 0 }
  const [selectedPortfolio, setSelectedPortfolio] = useState(initialPortfolio)
  const onMouseEnterPortfolioItem = id => {
    setSelectedPortfolio(prevState => ({ ...prevState, id }))
    setActiveItem(id)
  }
  const onMouseLeavePortfolioItem = () => {
    setSelectedPortfolio(initialPortfolio)
    setActiveItem(null)
  }

  const onMouseEnterStaticNavigation = path => {    
    setActiveItem(path)
  }

  const onMouseLeaveStaticNavigation = () => {
    setActiveItem(null)
  }
  return (
    <Wrapper theme={theme}>
      <SettingDialog open={openSetting} setOpen={setOpenSetting} />
      <List>
        {/* Home page */}
        <ListItem
          to={navigations.home.path}
          theme={theme}
          onMouseEnter={() =>
            onMouseEnterStaticNavigation(navigations.contact.path)
          }
          onMouseLeave={onMouseLeaveStaticNavigation}
        >
          <ListItemIcon>
            {pathname === navigations.home.path ||
            activeItem === navigations.home.path
              ? navigations.home.activeIcon
              : navigations.home.icon}
          </ListItemIcon>
          <ListItemText>{navigations.home.name}</ListItemText>
        </ListItem>
        {portfoliosList.edges.map(({ node: portfolio }) => {
          return (
            <ListItem
              key={portfolio.contentful_id}
              to={`/${portfolio.slug}`}
              theme={theme}
              onMouseEnter={() =>
                onMouseEnterPortfolioItem(portfolio.contentful_id)
              }
              onMouseLeave={onMouseLeavePortfolioItem}
            >
              <ListItemIcon>
                {portfolioPath === portfolio.slug ||
                activeItem === portfolio.contentful_id
                  ? portfolioIcons[`portfolioId_${portfolio.portfolioId}`]
                      .activeIcon
                  : portfolioIcons[`portfolioId_${portfolio.portfolioId}`].icon}
              </ListItemIcon>
              <ListItemText>
                {lang === "en" ? portfolio.nameEn : portfolio.nameVi}
              </ListItemText>
              {portfolio.contentful_id === selectedPortfolio.id && (
                <CategoriesContainer>
                  <CategoriesDropdown
                    parentSlug={portfolio.slug}
                    categories={portfolio.categories}
                  />
                </CategoriesContainer>
              )}
            </ListItem>
          )
        })}
        {/* Contact */}
        <ListItem
          to={navigations.contact.path}
          theme={theme}
          onMouseEnter={() =>
            onMouseEnterStaticNavigation(navigations.contact.path)
          }
          onMouseLeave={onMouseLeaveStaticNavigation}
        >
          <ListItemIcon>
            {pathname === navigations.contact.path ||
            activeItem === navigations.contact.path
              ? navigations.contact.activeIcon
              : navigations.contact.icon}
          </ListItemIcon>
          <ListItemText>{navigations.contact.name}</ListItemText>
        </ListItem>
        {/* Setting */}
        <Setting theme={theme} onClick={() => setOpenSetting(true)}>
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
          portfolioId
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
