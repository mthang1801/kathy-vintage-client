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
    `gatsby-plugin-theme-ui`
  ],
}
