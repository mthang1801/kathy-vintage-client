import React from 'react'
import Layout from "../containers/Layout"
import {graphql} from "gatsby";
import BreadcrumbNavigation from "../components/BreadcrumbNavigation/BreadcrumbNavigation"


const PortfolioTemplate = (props) => {
  const {pageContext: {portfolio}} = props;
  return (
    <Layout>
      <BreadcrumbNavigation portfolio={portfolio}/>
    </Layout>
  )
}

export default PortfolioTemplate
