import React from "react"
import {
  Wrapper,
  BreadcrumbItemLink,
} from "./styles/BreadcrumbNavigation.styles"
import { useTheme } from "../../theme"
import useLanguage from "../Global/useLanguage"
const BreadcrumbNavigation = ({  
  contenfulData, 
  staticData
}) => {
  const { theme } = useTheme()
  const { i18n, lang } = useLanguage()
  const {breadcrumbs} = i18n.store.data[lang].translation

  return (
    <Wrapper theme={theme}>
      <BreadcrumbItemLink to={breadcrumbs.home.path} theme={theme}>
          {breadcrumbs.home.name}
      </BreadcrumbItemLink>
      {contenfulData && contenfulData.map(dataItem => (
        <BreadcrumbItemLink key={dataItem.contentful_id} to={`/${dataItem.slug}`} theme={theme}>
        {lang === "en" ? dataItem.nameEn : dataItem.nameVi}{" "}
      </BreadcrumbItemLink>
      ))}
      {staticData && staticData.map(dataItem => (
        <BreadcrumbItemLink key={dataItem.id} to={`${dataItem.path}`} theme={theme}>
        {dataItem.title}
      </BreadcrumbItemLink>
      ))}
      
    </Wrapper>
  )
}

export default BreadcrumbNavigation
