import React, { useState } from "react"
import {
  Wrapper,
  AntTab,
  AntTabs,
  ProductsList,
} from "./styles/TabProductsList.styles"
import { useLanguage } from "../../../locales"
import { useTheme } from "../../../theme"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import { getParams } from "../../../utils/checkUrl"
const TabsProductsList = ({ products }) => {
  const { theme } = useTheme()
  const {
    translation: {
      page: {
        template: {
          content: { tabs },
        },
      },
    },
  } = useLanguage()

  const { pathname } = useLocation()
  const tabKey = getParams("tab") || "all"
  const tabIndex = tabs.findIndex(tab => tab.key === tabKey)
  const handleChange = (event, newValue) => {
    const path =
      pathname[pathname.length - 1] === "/" ? pathname.slice(0, -1) : pathname
    navigate(`${path}?tab=${tabs[newValue].key}`)
  }
  return (
    <Wrapper theme={theme}>
      <AntTabs
        value={tabIndex}
        scrollButtons="auto"
        variant="scrollable"
        onChange={handleChange}
        aria-label="ant example"
      >
        {tabs.map(({ key, value }) => (
          <AntTab key={key} label={value} />
        ))}
      </AntTabs>
    </Wrapper>
  )
}

export default TabsProductsList
