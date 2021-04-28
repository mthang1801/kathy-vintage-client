import React, { useState } from "react"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "./styles/PortfoliosList.styles"
import { useThemeUI } from "theme-ui"
import Image from "gatsby-image"
const ProductGroup = ({ productGroups }) => {
  const initialSelected = { id: null, x: 0, y: 0 }
  const [selectedProductGroup, setSelectedProductGroup] = useState(
    initialSelected
  )
  const { theme, colorMode } = useThemeUI()
  const onMouseEnterCategoryListItem = (e, id) => {
    if (selectedProductGroup.id !== id) {
      setSelectedProductGroup({
        id,
        x: e.clientX,
        y: document.getElementById(id).getBoundingClientRect().top,
      })
    }
  }  
  const onMouseLeaveCategoriesList = () =>
  setSelectedProductGroup(initialSelected)
  return (
    <>
      {productGroups?.length ? (
        <List
          theme={theme.colors[colorMode]}
          onMouseLeave={onMouseLeaveCategoriesList}
        >
          {productGroups.map(productGroup => (
            <ListItem
              onMouseEnter={e =>
                onMouseEnterCategoryListItem(e, productGroup.contentful_id)
              }
              key={productGroup.contentful_id}
              theme={theme.colors[colorMode]}
              id={productGroup.contentful_id}
              active={productGroup.contentful_id === selectedProductGroup.id}
            >
              <ListItemIcon>
                <Image
                  fluid={productGroup?.image?.fluid}
                  alt={productGroup?.image?.title}
                />
              </ListItemIcon>
              <ListItemText>{productGroup.nameVi}</ListItemText>
            </ListItem>
          ))}          
        </List>
      ) : null}
    </>
  )
}

export default ProductGroup
