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
} from "./styles/SmallViewportPortfolios.styles"
import Image from "gatsby-image"
import {useThemeUI} from "theme-ui";
const SmallViewportCategories = ({ categories }) => {
  const {theme,colorMode} =useThemeUI()
  return (
    <TabletWrapper open={categories?.length} theme={theme.colors[colorMode]}>
      {categories?.length &&
        categories.map(category => (
          <ViewPort key={category.contentful_id}>
            <ListItem>
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

export default SmallViewportCategories
