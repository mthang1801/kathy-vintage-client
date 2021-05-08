const path = require("path")

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /firebase/,
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
            slug
            categories {
              slug
              productGroups {
                slug
              }
            }
          }
        }
      }
    }
  `)
  //create portfolio page
  data.pages.edges.forEach(({node : portfolio}) => {
    createPage({
      path : `/${portfolio.slug}`,
      component : path.resolve("./src/templates/portfolio.template.jsx"),    
      context : {
        portfolio
      }       
    })
    //create category page
    portfolio.categories.map(category => {
      createPage({
        path : `/${portfolio.slug}/${category.slug}`,
        component : path.resolve("./src/templates/category.template.jsx"),
        context : {
          portfolio, 
          category
        }
      })
      //create product Groups page
      category.productGroups.map(productGroup => {
        createPage({
          path : `/${portfolio.slug}/${category.slug}/${productGroup.slug}`,
          component : path.resolve("./src/templates/productGroup.template.jsx"),
          context : {
            portfolio,
            category,
            productGroup
          }
        })
      })
    })  
  })
  
  
}
