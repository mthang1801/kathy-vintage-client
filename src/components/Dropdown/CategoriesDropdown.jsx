import React, { useState } from "react"
import {
  List,
  ListItem,
  ListItemText,
  ProductGroupsContainer,
} from "./styles/DropdownList.styles"
import ProductGroupsDropdown from "./ProductGroupsDropdown"
import { useTheme } from "../../theme"
import useLanguage from "../Global/useLanguage"
const CategoriesDropdown = ({ parentSlug, categories }) => {
  const { theme } = useTheme()
  const initialCategory = { id: null, x: 0, y: 0 }
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const {lang} = useLanguage()  
  const onMouseEnterCategory = id => {
    setSelectedCategory(prevState => ({ ...prevState, id }))
  }

  if (!categories || !categories.length) return null
  return (
    <List
      theme={theme}
      onMouseLeave={() => setSelectedCategory(initialCategory)}
    >
      {categories.map(category => (
        <ListItem
          key={category.contentful_id}
          to={`/${parentSlug}/${category.slug}`}
          theme={theme}          
          onMouseEnter={() => onMouseEnterCategory(category.contentful_id)}
        >
          <ListItemText>{category[`name_${lang}`]}</ListItemText>
          {selectedCategory.id === category.contentful_id && (
            <ProductGroupsContainer>
              <ProductGroupsDropdown
                parentSlug={`/${parentSlug}/${category.slug}`}
                productGroups={category.productGroups}
              />
            </ProductGroupsContainer>
          )}
        </ListItem>
      ))}
    </List>
  )
}

export default CategoriesDropdown
