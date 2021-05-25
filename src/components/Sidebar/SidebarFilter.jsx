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
      <SidebarFilterPrices
        minPrice={20000}
        maxPrice={2000000}
        templateTranslation={templateTranslation}
      />
      <SidebarFilterDiscount templateTranslation={templateTranslation} />
      <SidebarManufactors
        templateTranslation={templateTranslation}
        manufactors={manufactors}
      />
    </>
  )
}

export default SidebarFilter
