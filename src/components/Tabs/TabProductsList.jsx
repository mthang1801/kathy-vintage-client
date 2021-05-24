import React, { useState } from "react"
import {
  Wrapper,
  AntTab,
  AntTabs,
  ProductsList,
} from "./styles/TabProductsList.styles"
import useLanguage from "../Global/useLanguage"
import { useTheme } from "../../theme"
import ProductItem from "../Product/ProductItem"
import {useLayoutTempateActions, useLayoutTemplateStates} from "../../hooks/useLayoutTemplate"
const TabsProductsList = ({ products }) => {
  const {tabIndex} = useLayoutTemplateStates();
  const {setTabIndex} = useLayoutTempateActions();
  const { theme } = useTheme()
  const { i18n, lang } = useLanguage()
  const { tabs } = i18n.store.data[lang].translation.page.template.content

  const handleChange = (event, newValue) => {
    setTabIndex(newValue)
  }  
  return (
    <Wrapper theme={theme}>
      <AntTabs value={tabIndex} onChange={handleChange} aria-label="ant example">
        {tabs.map(({ key, value }) => (
          <AntTab key={key} label={value} />
        ))}
      </AntTabs>
      
    </Wrapper>
  )
}

export default TabsProductsList
