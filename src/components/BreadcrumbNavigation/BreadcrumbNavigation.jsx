import React from "react"
import {
  Wrapper,
  BreadcrumbItemLink,
} from "./styles/BreadcrumbNavigation.styles"
import { useTheme } from "../../theme"
import {useLanguage} from "../../locales"
const BreadcrumbNavigation = ({ contenfulData, staticData }) => {
  const { theme } = useTheme()
  const {
    translation: { breadcrumbs }, lang
  } = useLanguage()

  const accumulativePath = index => {
    let path = ""
    if (contenfulData?.length) {
      for (let i = 0; i <= index; i++) {
        path += `/${contenfulData[i].slug}`
      }
    }
    return path
  }
  const formatBreadcrumbLinkName = dataItem => {
    const fullName = dataItem[`name_${lang}`]
    const shortName =
      fullName.length > 60 ? fullName.slice(0, 60) + "..." : fullName
    return { fullName, shortName }
  }
  return (
    <Wrapper theme={theme}>
      <BreadcrumbItemLink to={breadcrumbs.home.path} theme={theme}>
        {breadcrumbs.home.name}
      </BreadcrumbItemLink>
      {contenfulData &&
        contenfulData.map((dataItem, idx) => (
          <BreadcrumbItemLink
            key={dataItem.contentful_id}
            to={accumulativePath(idx)}
            theme={theme}
            title={formatBreadcrumbLinkName(dataItem).fullName}
          >
            {formatBreadcrumbLinkName(dataItem).shortName}{" "}
          </BreadcrumbItemLink>
        ))}
      {staticData &&
        staticData.map(dataItem => (
          <BreadcrumbItemLink
            key={dataItem.id}
            to={`${dataItem.path}`}
            theme={theme}
          >
            {dataItem.title}
          </BreadcrumbItemLink>
        ))}
    </Wrapper>
  )
}

export default BreadcrumbNavigation
