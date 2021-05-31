import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import {useLocation} from "@reach/router"
const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        siteUrl
        author
        keywords
        twitterUsername
        siteImage: image
      }
    }
  }
`
const SEO = ({ title, description, image, imageBase64, lang }) => {  
  const {pathname} = useLocation()
  const { site } = useStaticQuery(query)
  const {
    siteTitle,
    siteDesc,
    siteUrl,
    twitterUsername,
    siteImage,
    keywords
  } = site.siteMetadata
  const seo = {
    title: title || siteTitle,
    description: description || siteDesc,
    image: imageBase64 ? imageBase64 : `${siteUrl}${image || siteImage}`,
    url: `${siteUrl}${pathname}`,
  }
  
  return (
    <Helmet
      title={seo.title}
      titleTemplate={`${seo.title}`}
      htmlAttributes={{ lang }}
      defer={false}      
    >
      <meta name="description" content={seo.description} />
      <meta image="image" content={seo.image} />      
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:description" content={seo.description} />   
      <meta name="keywords" content={keywords.join(",")}/>   
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang : "vi",
  description : ""
} 

export default SEO
