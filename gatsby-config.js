require("dotenv").config({ path: ".env" })
const path = require("path")

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Kathy Vintage",
    description: "Kathy Vintage Chuyên cung cấp quần áo nam nữ sỉ và lẻ",
    author: "@MVT",
    image: "/images/logo.png",
    twitterUsername: "@kathy_vintage",
    siteUrl: "https://kathy-vintage.netlify.app",
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kathy Vintage clothes shop`,
        short_name: `Kathy Vintage`,
        description:
          "Kathy Vintage Chuyên cung cấp quần áo nam nữ sỉ và lẻ",
        start_url: `/`,
        background_color: `#f0f0f0`,
        theme_color: `#ffc400`,
        display: `standalone`,
        icon: `src/images/logo.png`,
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
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        queries: require("./src/utils/algolia-queries"),
        chunkSize: 10000,
      },
    },    
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/
        }
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://kathy-vintage.netlify.app",
        sitemap: "https://kathy-vintage.netlify.app/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_MEASUREMENT_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
      },
    },
  ],

}
