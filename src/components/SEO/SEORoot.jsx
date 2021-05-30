import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        siteUrl
        author
        twitterUsername
        siteImage: image
      }
    }
  }
`
const SEO = ({ title, description, image }) => {    
  const { site } = useStaticQuery(query)
  const {
    siteTitle,
    siteDesc,
    siteUrl,
    twitterUsername,
    siteImage,
  } = site.siteMetadata
  const seo = {
    title: title || siteTitle,
    description: description || siteDesc,
    image: `${siteUrl}${image || siteImage}`,
    url: `${siteUrl}`,
  }
  return (
    <Helmet>      
      <meta image="image" content={seo.image} />            
      <meta property="og:image" content={seo.image} />      
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

export default SEO
