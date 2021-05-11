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
            nameEn
            nameVi
            slug
            categories {
              nameEn
              nameVi
              slug
              productGroups {
                nameEn
                nameVi
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
            nameEn
            nameVi
            slug
            portfolio {
              contentful_id
              nameEn
              nameVi
              slug
            }
            category {
              contentful_id
              nameEn
              nameVi
              slug
            }
            productGroup {
              contentful_id
              nameEn
              nameVi
              slug
            }
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
      },
    })
    //create category page
    portfolio.categories.forEach(category => {
      createPage({
        path: `/${portfolio.slug}/${category.slug}`,
        component: path.resolve("./src/templates/category.template.jsx"),
        context: {
          portfolio,
          category,
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

  data.products.edges.forEach(({node : product}) => {
    createPage({
      path : `/products/${product.slug}`,
      component : path.resolve("./src/templates/product.template.jsx"),
      context : {
        product : {contentful_id : product.contenful_id, slug : product.slug, nameEn : product.nameEn, nameVi : product.nameVi}, 
      }
    })
    if(product?.portfolio?.slug && product?.category?.slug && product?.productGroup?.slug){
      createPage({
        path : `/${product.portfolio.slug}/${product.category.slug}/${product.productGroup.slug}/${product.slug}`, 
        component : path.resolve("./src/templates/product.template.jsx"), 
        context : {          
          product : {contentful_id : product.contenful_id, slug : product.slug, nameEn : product.nameEn, nameVi : product.nameVi}, 
          portfolio : product.portfolio,
          category : product.category, 
          productGroup : product.productGroup
        }
      })
    }
   
  })

}
