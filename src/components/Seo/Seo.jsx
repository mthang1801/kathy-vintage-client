import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
// const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         siteTitle: title
//         siteDesc: description
//         siteUrl
//         keywords
//         author
//         twitterUsername
//         siteImage: image
//       }
//     }
//   }
// `
// const Seo = ({ title, description, image, pathname, lang }) => {
//   const { site } = useStaticQuery(query)
//   const {
//     siteTitle,
//     siteDesc,
//     siteUrl,
//     twitterUsername,
//     siteImage,
//     keywords,
//   } = site.siteMetadata
//   const seo = {
//     title: title || siteTitle,
//     description: description || siteDesc,
//     image: `${siteUrl}${image || siteImage}`,
//     url: pathname ? `${siteUrl}${pathname}` : `${siteUrl}`,
//   }  
//   return (
//     <Helmet
//       title={seo.title}
//       titleTemplate={`${seo.title}`}
//       htmlAttributes={{ lang }}
//       defer={false}
//     >       
//       <link rel="canonical" href={seo.url} />
//       <meta name="description" content={seo.description} />
//       <meta image="image" content={seo.image} />
//       <meta name="keywords" content={keywords.join(",")} />
//       <meta property="og:url" content={seo.url} />
//       <meta property="og:title" content={seo.title} />
//       <meta property="og:type" content="website" />
//       <meta property="og:image" content={seo.image} />
//       <meta property="og:image:width" content="400" />
//       <meta property="og:image:height" content="300" />
//       <meta property="og:description" content={seo.description} />
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:creator" content={twitterUsername} />
//       <meta name="twitter:description" content={seo.description} />
//       <meta name="twitter:title" content={seo.title} />
//       <meta name="twitter:image" content={seo.image} />
//     </Helmet>
//   )
// }

// Seo.defaultProps = {
//   description: null,
//   title: null,
//   image: null,
//   lang: "vi",
// }

// export default Seo

function SEO({ description, lang, meta, title}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            image
          }
        }
      }
    `
  )
  const image = site.siteMetadata.image
  const keywords = site.siteMetadata.keywords
  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:image`,
          content: image,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO