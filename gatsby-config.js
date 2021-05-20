require("dotenv").config({ path: ".env" })
const path = require("path")

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "TN Clothing Shop",
    description: "Women Clothes",
    author: "MVT",
    image: "/images/tn-shop.jpg",
    siteUrl: "https://tn-clothes-shop.netlify.app",
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images-contentful`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images-carousel",
        path: path.join(__dirname, `src`, `images`, `carousel`),
      },
    },
    {
      resolve: "gatsby-plugin-disqus",
      options: {
        shortname: process.env.GATSBY_DISQUS_NAME,
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: process.env.GATSBY_FIREBASE_API_KEY,
          authDomain:process.env.GATSBY_FIREBASE_AUTH_DOMAIN,          
          projectId:process.env.GATSBY_FIREBASE_PROJECT_ID,
          storageBucket:process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
          messagingSenderId:process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
          appId:process.env.GATSBY_FIREBASE_APP_ID,
          measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID
        }
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `tomato`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
  ],
}
