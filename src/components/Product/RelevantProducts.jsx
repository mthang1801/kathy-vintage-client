import React from "react"
import _ from "lodash"
import { Title , RelevantProductsContainer} from "./styles/RelevantProducts.styles"
import ProductItem from "./ProductItem"
import useLanguage from "../Global/useLanguage"

const RelevantProducts = ({
  currentProduct,
  productsByCategory,
  productsByProductGroup,
}) => {
  const { i18n, lang } = useLanguage()
  const { productPage } = i18n.store.data[lang].translation.product
  const relevantProducts = _.uniqBy(
    [...productsByProductGroup.edges, ...productsByCategory.edges].map(
      ({ node }) => node
    ),
    e => e.contentful_id
  ).filter(item => item.contentful_id !== currentProduct.contentful_id)

  return (
    <>
      {relevantProducts?.length ? (
        <>
          <Title>{productPage.relevantProducts}</Title>
          <RelevantProductsContainer>
            {relevantProducts.map(product => (
              <ProductItem key={product.contentful_id} product={product}/>
            ))}
          </RelevantProductsContainer>
        </>
      ) : null}
    </>
  )
}

export default RelevantProducts
