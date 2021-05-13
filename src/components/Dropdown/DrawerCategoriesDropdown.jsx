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
import useLanguage from "../Global/useLanguage"
const DrawerCategoriesDropdown = ({ portfolio, categories, onNavigate }) => {
  const { theme } = useTheme()
  const {lang} = useLanguage()
  return (
    <TabletWrapper open={categories?.length} theme={theme}>
      {categories?.length &&
        categories.map(category => (
          <ViewPort key={category.contentful_id}>
            <ListItem
              onClick={() => onNavigate(`/${portfolio.slug}/${category.slug}`)}
            >
              <ListItemImage>
                <Image fluid={category?.image?.fluid} alt={category[`name_${lang}`]} />
              </ListItemImage>
              <ListItemText>{category[`name_${lang}`]}</ListItemText>
            </ListItem>
          </ViewPort>
        ))}
    </TabletWrapper>
  )
}

export default DrawerCategoriesDropdown
