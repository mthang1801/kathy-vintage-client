import React from "react"
import {
  TabletWrapper,
  ListitemIcon,
  ListItem,
  ListItemImage,
  ListItemText,
  useStyles,
  ViewPort,
  CategoriesList,
} from "./styles/DrawerPortfoliosDropdown.styles"
import Image from "gatsby-image"
import { useTheme } from "../../theme"
import { useLanguage } from "../../locales"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
const DrawerCategoriesDropdown = ({ portfolio, categories, onNavigate }) => {
  const { theme } = useTheme()
  const { lang } = useLanguage()
  const onNavigateToCategory = (portfolio, category) => {
    trackCustomEvent({
      action: "Click",
      category: "navigate",
      label: "Navigate to specific category",
    })
    onNavigate(`/${portfolio.slug}/${category.slug}`)
  }
  return (
    <TabletWrapper open={categories?.length} theme={theme}>
      {categories?.length &&
        categories.map(category => (
          <ViewPort key={category.contentful_id}>
            <ListItem onClick={() => onNavigateToCategory(portfolio, category)}>
              <ListItemImage>
                <Image
                  fluid={category?.image?.fluid}
                  alt={category[`name_${lang}`]}
                />
              </ListItemImage>
              <ListItemText>{category[`name_${lang}`]}</ListItemText>
            </ListItem>
          </ViewPort>
        ))}
    </TabletWrapper>
  )
}

export default DrawerCategoriesDropdown
