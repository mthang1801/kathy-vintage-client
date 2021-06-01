import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import _ from "lodash"
const query = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        siteUrl
        keywords
        author
        twitterUsername
        siteImage: image
      }
    }
  }
`
const Seo = ({ title, description, image, pathname, lang }) => {
  const { site } = useStaticQuery(query)
  const {
    siteTitle,
    siteDesc,
    siteUrl,
    twitterUsername,
    siteImage,
    keywords,
  } = site.siteMetadata
  const seo = {
    title: title || siteTitle,
    description: description || siteDesc,
    image: `${siteUrl}${image || siteImage}`,
    url: pathname ? `${siteUrl}${pathname}` : `${siteUrl}`,
  }
  useEffect(() => {

    let { childNodes } = document.getElementsByTagName("head")[0]

    let metaTags = []
    let nonMetaTags = []
    childNodes.forEach((node,idx) => {
      if (node.nodeName.toLowerCase() === "meta") {
        metaTags.push(node)
      }else{
        nonMetaTags.push(node)
      }
    })
    const newHead = [...metaTags, ...nonMetaTags];
    document.getElementsByTagName("head")[0].innerHTML = "";
    for(let item of newHead){
      document.getElementsByTagName("head")[0].appendChild(item)
    }
  }, [title])
  return (
    <Helmet
      title={seo.title}
      titleTemplate={`${seo.title}`}
      htmlAttributes={{ lang }}
      defer={false}
    >
      <link rel="canonical" href={seo.url} />
      <meta name="description" content={seo.description} />
      <meta image="image" content={seo.image} />
      <meta name="keywords" content={keywords.join(",")} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

Seo.defaultProps = {
  description: null,
  title: null,
  image: null,
  lang: "vi",
}

export default Seo
