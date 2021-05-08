import React from "react"
import { List, ListItem, ListItemText } from "./styles/DropdownList.styles"
import { useTheme } from "../../theme"
import useLanguage from "../Global/useLanguage"
const ProductGroupsDropdown = ({ parentSlug, productGroups }) => {
  console.log(parentSlug)
  const { theme } = useTheme()
  const  {lang} = useLanguage()  
  if (!parentSlug || !productGroups?.length) return null
  return (
    <List theme={theme}>
      {productGroups.map(productGroup => (
        <ListItem
          key={productGroup.contentful_id}
          to={`${parentSlug}/${productGroup.slug}`}
          theme={theme}
        >
          <ListItemText>{lang === "en" ? productGroup.nameEn : productGroup.nameVi}</ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default ProductGroupsDropdown
