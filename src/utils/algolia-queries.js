const pageQuery = `
{
  products : allContentfulProduct(filter:{status:{eq: true}}){
    edges{
      node{
        contentful_id
        name_en
        name_vi                  
        slug
      }
    }
  }
}
`

function pageToAlgoliaRecord({
  node: { contentful_id,name_en, name_vi, slug},
}) {
  return {
    objectID: contentful_id,    
    name_en,
    name_vi,
    slug,
  }
}

const queries = [
  {
    indexName: "CLOTHES",
    query: pageQuery,
    transformer: ({ data }) => data.products.edges.map(pageToAlgoliaRecord),
  }
]

module.exports = queries;