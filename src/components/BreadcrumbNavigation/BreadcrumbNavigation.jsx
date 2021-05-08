import React from "react"
import {
  Wrapper,
  BreadcrumbItemLink,
} from "./styles/BreadcrumbNavigation.styles"
import { useTheme } from "../../theme"
import useLanguage from "../Global/useLanguage"
const BreadcrumbNavigation = ({
  portfolio,
  category,
  productGroup,
  product,
}) => {
  const { theme } = useTheme()
  const { lang } = useLanguage()

  return (
    <Wrapper theme={theme}>
      {portfolio && (
        <BreadcrumbItemLink to={`/${portfolio.slug}`} theme={theme}>
          {lang === "en" ? portfolio.nameEn : portfolio.nameVi}{" "}
        </BreadcrumbItemLink>
      )}
      {category && (
        <BreadcrumbItemLink to={`/${category.slug}`} theme={theme}>
          {lang === "en" ? category.nameEn : category.nameVi}{" "}
        </BreadcrumbItemLink>
      )}
      {productGroup && (
        <BreadcrumbItemLink to={`/${productGroup.slug}`} theme={theme}>
          {lang === "en" ? productGroup.nameEn : productGroup.nameVi}{" "}
        </BreadcrumbItemLink>
      )}
      {product && (
        <BreadcrumbItemLink to={`/${product.slug}`} theme={theme}>
          {lang === "en" ? product.nameEn : product.nameVi}{" "}
        </BreadcrumbItemLink>
      )}
    </Wrapper>
  )
}

export default BreadcrumbNavigation
