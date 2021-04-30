require("dotenv").config({path : ".env"})
const path = require("path");

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
    siteUrl: "https://mvthang-official.netlify.app/"
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-sqip`,
    `gatsby-remark-images-contentful`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TN Clothes Shop`,
        short_name: `TN Shop`,
        description:
          "Clothes shop",
        start_url: `/`,
        background_color: `#0d47a1`,
        theme_color: `#1a237e`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        icons: [
          {
            src: `/favicons/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve : `gatsby-source-filesystem`,
      options : {
        name : "images-carousel",
        path : path.join(__dirname, `src`, `images`, `carousel`)
      }
    }
  ],
}
