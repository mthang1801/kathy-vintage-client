const path = require("path")

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      externals: ["react-helmet"],
      module: {
        rules: [
           {
            test: /offending-module/,
            use: loaders.null(),
          },
          {
            test: /firebase/,
            use: loaders.null(),
          },
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    {
      pages: allContentfulPortfolio {
        edges {
          node {
            contentful_id
            name_en
            name_vi
            slug
            categories {
              contentful_id
              name_en
              name_vi
              slug
              productGroups {
                contentful_id
                name_en
                name_vi
                slug
              }
            }
          }
        }
      }
      products: allContentfulProduct {
        edges {
          node {
            contentful_id
            slug
            portfolio {
              contentful_id
              slug
            }
            category {
              contentful_id
              slug
            }
            productGroup {
              contentful_id
              slug
            }
            createdAt
            updatedAt
          }
        }
      }
    }
  `)

  //create portfolio page
  data.pages.edges.forEach(({ node: portfolio }) => {
    createPage({
      path: `/${portfolio.slug}`,
      component: path.resolve("./src/templates/portfolio.template.jsx"),
      context: {
        portfolio,
        portfolioId: portfolio.contentful_id,
      },
    })
    //create category page
    portfolio.categories.forEach(category => {
      createPage({
        path: `/${portfolio.slug}/${category.slug}`,
        component: path.resolve("./src/templates/category.template.jsx"),
        context: {
          categoryId: category.contentful_id,
        },
      })
      //create product Groups page
      category.productGroups.forEach(productGroup => {
        createPage({
          path: `/${portfolio.slug}/${category.slug}/${productGroup.slug}`,
          component: path.resolve("./src/templates/productGroup.template.jsx"),
          context: {
            portfolio,
            category,
            productGroup,
            productGroupId: productGroup.contentful_id,
          },
        })
      })
    })
  })

  /**
   * @desc create products page
   * @route1 /product/:params
   * @route2 /[portfolio-slug]/[category-slug]/[product-group-slug]/[product-slug]
   */

  data.products.edges.forEach(({ node: product }) => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve("./src/templates/product.template.jsx"),
      context: {
        contentful_id: product.contentful_id,
        category_contentful_id: product.category.contentful_id,
        productGroup_contentful_id: product.productGroup.contentful_id,
      },
    })
    if (
      product.portfolio.slug &&
      product.category.slug &&
      product.productGroup.slug
    ) {
      createPage({
        path: `/${product.portfolio.slug}/${product.category.slug}/${product.productGroup.slug}/${product.slug}`,
        component: path.resolve("./src/templates/product.template.jsx"),
        context: {
          contentful_id: product.contentful_id,
          category_contentful_id: product.category.contentful_id,
          productGroup_contentful_id: product.productGroup.contentful_id,
        },
      })
    }
  })
}
