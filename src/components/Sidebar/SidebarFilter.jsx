import React from "react"
import { Wrapper, Title } from "./styles/Sidebar.styles"
import SidebarFilterPrices from "./SidebarFilterPrices"
import SidebarFilterDiscount from "./SidebarFilterDiscount"
import SidebarManufactors from "./SidebarManufactors"
import SidebarSorting from "./SidebarSorting"
const SidebarFilter = ({ data, templateTranslation }) => {
  const { productsPrice, manufactors } = data

  return (
    <>
      <SidebarSorting templateTranslation={templateTranslation} />
      {productsPrice.min < productsPrice.max && (
        <SidebarFilterPrices
          minPrice={productsPrice.min}
          maxPrice={productsPrice.max}
          templateTranslation={templateTranslation}
        />
      )}
      <SidebarFilterDiscount templateTranslation={templateTranslation} />
      {manufactors?.length ? (
        <SidebarManufactors
          templateTranslation={templateTranslation}
          manufactors={manufactors}
        />
      ) : null}
    </>
  )
}

export default SidebarFilter
