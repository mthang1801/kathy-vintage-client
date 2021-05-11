import React from 'react'
import Layout from "../containers/Layout"
import BreadcrumbNavigation from "../components/BreadcrumbNavigation/BreadcrumbNavigation"
const ProductProduct = (props) => {
  const {portfolio, category, productGroup, product} = props.pageContext; 
  
  return (
    <Layout>
      <BreadcrumbNavigation contenfulData={[portfolio, category, productGroup, product]}/>
    </Layout>
  )
}

export default ProductProduct
