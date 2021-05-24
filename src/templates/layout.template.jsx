import React, { useState, createContext, useEffect } from "react"
import {
  ContentContainer,
  Sidebar,
  TemplateViewPortRight,
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
import {getParams} from "../utils/checkUrl"
import {PRODUCTS_TEMPLATE_PER_PAGE} from "../constants/client"
import {useLocation} from "@reach/router"
import {navigate} from "gatsby"
export const LayoutTemplateContext = createContext({})

const LayoutTemplate = ({ data, pageLocation }) => {
  const currentPage = +getParams("page") || 1;
  const numPages = Math.ceil(data.products.edges.length / PRODUCTS_TEMPLATE_PER_PAGE);
  const [products, setProducts] = useState(data.products.edges.slice( (currentPage-1) * PRODUCTS_TEMPLATE_PER_PAGE, currentPage * PRODUCTS_TEMPLATE_PER_PAGE).map(({node}) => node));
  const [tabIndex, setTabIndex] = useState(0);  
  const { theme } = useTheme()
  const { i18n, lang } = useLanguage()
  const { template } = i18n.store.data[lang].translation.page;
  const location = useLocation();
  console.log(location)
  const sidebarNavigations =
    pageLocation === "portfolio"
      ? data.categories.edges.map(({ node: category }) => category)
      : null
  const slugParentForNavigation =
    pageLocation === "portfolio" ? `/${data.portfolio.slug}` : null

  const states = { tabIndex };
  const actions = { setTabIndex };  
  
  useEffect(() => {        
    setProducts(data.products.edges.slice( (currentPage-1) * PRODUCTS_TEMPLATE_PER_PAGE, currentPage * PRODUCTS_TEMPLATE_PER_PAGE).map(({node}) => node))
  }, [currentPage])
  const handlePageClick = data => {
    const { selected} = data
    navigate(`${location.origin}${location.pathname}?page=${selected+1}`);
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
          <TabProductsList
            products={products}
          />
          <ProductsList theme={theme}>
            {products.map(product => (
              <ProductItem key={product.contentful_id} product={product} />
            ))}
          </ProductsList>
          {numPages > 1 && <ProductsPagination currentPage={currentPage} numPages={numPages}  handlePageClick={data => handlePageClick(data)}/>}
        </MainContain>
      </ContentContainer>
    </LayoutTemplateContext.Provider>
  )
}

export default LayoutTemplate
