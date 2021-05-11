import React from 'react'
import Layout from "../containers/Layout"
import {graphql} from "gatsby";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation/BreadcrumbNavigation"

const ProductGroupTemplate = (props) => {  
  const {pageContext: {category, portfolio, productGroup}} = props;
  return (
    <Layout>
      <BreadcrumbNavigation contenfulData={[portfolio, category, productGroup]}/>      
    </Layout>
  )
}

export default ProductGroupTemplate
