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
const DrawerCategoriesDropdown = ({ portfolio, categories, onNavigate }) => {
  const { theme } = useTheme()
  return (
    <TabletWrapper open={categories?.length} theme={theme}>
      {categories?.length &&
        categories.map(category => (
          <ViewPort key={category.contentful_id}>
            <ListItem
              onClick={() => onNavigate(`/${portfolio.slug}/${category.slug}`)}
            >
              <ListItemImage>
                <Image fluid={category?.image?.fluid} alt={category?.nameVi} />
              </ListItemImage>
              <ListItemText>{category.nameVi}</ListItemText>
            </ListItem>
          </ViewPort>
        ))}
    </TabletWrapper>
  )
}

export default DrawerCategoriesDropdown
