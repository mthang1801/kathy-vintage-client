import React from "react"
import { List, ListItem, ListItemText } from "./styles/DropdownList.styles"
import { useThemeUI } from "theme-ui"
import useLanguage from "../Global/useLanguage"
const ProductGroupsDropdown = ({ parentSlug, productGroups }) => {
  const { theme, colorMode } = useThemeUI()
  const  {lang} = useLanguage()
  if (!parentSlug || !productGroups?.length) return null
  return (
    <List theme={theme.colors[colorMode]}>
      {productGroups.map(productGroup => (
        <ListItem
          key={productGroup.contentful_id}
          to={`/${parentSlug}/${productGroup.slug}`}
          theme={theme.colors[colorMode]}
        >
          <ListItemText>{lang === "en" ? productGroup.nameEn : productGroup.nameVi}</ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default ProductGroupsDropdown
