import React, { useState } from "react"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ProductGroupsContainer,
  ListItemExpand
} from "./styles/PortfoliosList.styles"
import {FaChevronRight, FaChevronLeft} from "react-icons/fa"
import ProductGroup from "./ProductGroup"
import { useThemeUI } from "theme-ui"
import Image from "gatsby-image"
const CategoriesList = ({ categories, position }) => {
  const initialSelectedCategory = {
    id: null,
    x: 0,
    y: 0,
    offsetFirstElement: 0,
  }
  const [selectedCategory, setSelectedCategory] = useState(
    initialSelectedCategory
  )
  const { theme, colorMode } = useThemeUI()
  const onMouseEnterCategoryListItem = (e, id) => {
    if (selectedCategory.id !== id) {
      setSelectedCategory({
        id,
        x: e.clientX,
        y: document.getElementById(id).getBoundingClientRect().top,
        offsetFirstElement: document
          .querySelector("[data-target=categories-dropdown-0]")
          .getBoundingClientRect().top,
      })
    }
  }

  const onMouseLeaveCategoriesList = () =>
    setSelectedCategory(initialSelectedCategory)
  return (
    <>
      {categories?.length ? (
        <List
          theme={theme.colors[colorMode]}
          onMouseLeave={onMouseLeaveCategoriesList}
        >
          {categories.map((category, index) => (
            <ListItem
              onMouseEnter={e =>
                onMouseEnterCategoryListItem(e, category.contentful_id)
              }
              key={category.contentful_id}
              theme={theme.colors[colorMode]}
              id={category.contentful_id}
              data-target={`categories-dropdown-${index}`}
              active={category.contentful_id === selectedCategory.id}
            >
              <ListItemIcon>
                <Image
                  fluid={category?.image?.fluid}
                  alt={category?.image?.title}
                />
              </ListItemIcon>
              <ListItemText>{category.nameVi}</ListItemText>
              <ListItemExpand>{category.contentful_id === selectedCategory.id ? <FaChevronLeft/> : <FaChevronRight/>}</ListItemExpand>
            </ListItem>
          ))}
          {selectedCategory.id && (
            <ProductGroupsContainer
              x={selectedCategory.x}
              y={Math.abs(
                selectedCategory.y - selectedCategory.offsetFirstElement
              )}
            >
              <ProductGroup
                productGroups={
                  categories.find(
                    category => category.contentful_id === selectedCategory.id
                  ).productGroups
                }
              />
            </ProductGroupsContainer>
          )}
        </List>
      ) : null}
    </>
  )
}

export default CategoriesList
