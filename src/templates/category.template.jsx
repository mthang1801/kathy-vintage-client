import React from 'react'
import Layout from "../containers/Layout"
import {graphql} from "gatsby";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation/BreadcrumbNavigation"

const CategoryTemplate = (props) => {
  const {pageContext: {portfolio, category}} = props;
  return (
    <Layout>
      <BreadcrumbNavigation portfolio={portfolio} category={category}/>
    </Layout>
  )
}

export default CategoryTemplate
