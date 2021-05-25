import React, { useState, createContext, useEffect } from "react"
import {
  ContentContainer,
  Sidebar,
  ProductCount,
  ProductsList,
  MainContain,
} from "../styles/layout.template.styles"
import SidebarNavigations from "../components/Sidebar/SidebarNavigations"
import SidebarFilter from "../components/Sidebar/SidebarFilter"
import useLanguage from "../components/Global/useLanguage"
import { useTheme } from "../theme"
import TabProductsList from "../components/Tabs/TabProductsList"
import ProductItem from "../components/Product/ProductItem"
import ProductsPagination from "../components/UI/Pagination/ProductsPagination"
import { getParams } from "../utils/checkUrl"
import { PRODUCTS_TEMPLATE_PER_PAGE } from "../constants/client"
import { useLocation } from "@reach/router"
import { navigate } from "gatsby"
import {
  filterProductsListByTab,
  getProductsCounter,
} from "./layout.template.util"
export const LayoutTemplateContext = createContext({})

const LayoutTemplate = ({ data, pageLocation }) => {
  const { theme } = useTheme()
  const { i18n, lang } = useLanguage()
  const { template } = i18n.store.data[lang].translation.page
  const [currentTab, setCurrentTab] = useState(getParams("tab") || "all")

  const [currentPage, setCurrentPage] = useState(+getParams("page") !== 0 ? +getParams("page") : 1)

  const [tabIndex, setTabIndex] = useState(0)
  const [products, setProducts] = useState(
    filterProductsListByTab(
      data.products,
      currentTab,
      currentPage,
      PRODUCTS_TEMPLATE_PER_PAGE
    )
  )
  const [productsCounter, setProductsCounter] = useState(
    getProductsCounter(data.products, currentTab, PRODUCTS_TEMPLATE_PER_PAGE)
  )
  const [sortingIndex, setSortingIndex] = useState(0)
  const [priceIndex, setPriceIndex] = useState(0)
  const [selectedPrice, setSelectedPrice] = useState({ from: null, to: null })
  const [discountIndex, setDiscountIndex] = useState(0)
  const [manufactorIndex, setManufactorIndex] = useState(0)
  const location = useLocation()
  const sidebarNavigations =
    pageLocation === "portfolio"
      ? data.categories.edges.map(({ node: category }) => category)
      : null
  const slugParentForNavigation =
    pageLocation === "portfolio" ? `/${data.portfolio.slug}` : null  
  useEffect(() => {
    //when tab index changed, reset all fields
    setSortingIndex(0)
    setPriceIndex(0)
    setSelectedPrice({ from: null, to: null })
    setDiscountIndex(0)
    setManufactorIndex(0)
    setProducts(
      filterProductsListByTab(
        data.products,
        currentTab,
        currentPage,
        PRODUCTS_TEMPLATE_PER_PAGE
      )
    )
    setProductsCounter(
      getProductsCounter(data.products, currentTab, PRODUCTS_TEMPLATE_PER_PAGE)
    )    
  }, [currentTab])

  useEffect(() => {
    setProducts(
      filterProductsListByTab(
        data.products,
        currentTab,
        currentPage,
        PRODUCTS_TEMPLATE_PER_PAGE
      )
    )
  }, [currentPage])

  useEffect(() => {
    
    const newTab = getParams("tab")
    const newPage = +getParams("page")
    if (newTab !== currentTab) {
      setCurrentTab(newTab);
      setCurrentPage(1);
    }
    if (newPage !== currentPage && newPage) {
      setCurrentPage(newPage)
    }
  }, [window.location.search])

  const states = {
    tabIndex,
    sortingIndex,
    priceIndex,
    selectedPrice,
    discountIndex,
    manufactorIndex,
  }
  const actions = {
    setTabIndex,
    setSortingIndex,
    setPriceIndex,
    setSelectedPrice,
    setDiscountIndex,
    setManufactorIndex,
  }

  const handlePageClick = data => {
    const { selected } = data
    const pathname =
      location.pathname[location.pathname.length - 1] === "/"
        ? location.pathname.slice(0, -1)
        : location.pathname
    navigate(`${pathname}?tab=${currentTab}&page=${selected + 1}`)
  }
  return (
    <LayoutTemplateContext.Provider value={{ states, actions }}>
      <ContentContainer>
        <Sidebar theme={theme}>
          <SidebarNavigations
            lang={lang}
            slugParent={slugParentForNavigation}
            navigations={sidebarNavigations}
            title={template?.sidebar?.navigation?.title}
          />
          <SidebarFilter data={data} templateTranslation={template} />
        </Sidebar>
        <MainContain theme={theme}>
          <TabProductsList products={products} />
          <ProductCount>
            {template.content.productCount.icon}
            <span
              dangerouslySetInnerHTML={{
                __html: template.content.productCount.name(
                  productsCounter.totalCount
                ),
              }}
            ></span>
          </ProductCount>
          <ProductsList theme={theme}>
            {products.map(product => (
              <ProductItem key={product.contentful_id} product={product} />
            ))}
          </ProductsList>
          {productsCounter?.numPages > 1 && (
            <ProductsPagination
              currentPage={currentPage}
              numPages={productsCounter?.numPages}
              handlePageClick={data => handlePageClick(data)}
            />
          )}
        </MainContain>
      </ContentContainer>
    </LayoutTemplateContext.Provider>
  )
}

export default LayoutTemplate
