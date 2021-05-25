import _ from "lodash"

export const getProductsCounter = (products, tab, numberPerPage) => {
  let totalCount = 0
  switch (tab) {
    case "all":
      totalCount = products.edges.length
      break
    case "recommended":
      totalCount = products.edges.filter(({ node }) => node.isRecommended)
        .length
      break
    case "latest":
      totalCount = products.edges.filter(
        ({ node }) =>
          new Date().getMonth() - new Date(node.updatedAt).getMonth() <= 1
      ).length
      break
    default:
      totalCount = products.edges.length
  }
  return {totalCount, numPages : Math.ceil(totalCount / numberPerPage)}
}

export const filterProductsListByTab = (
  products,
  tab,
  currentPage,
  limit = 15
) => {
  const startAt = (currentPage - 1) * limit
  const endAt = currentPage * limit
  switch (tab) {
    case "all":
      return _.sortBy(
        products.edges.map(({ node }) => node),
        ["isRecommended", "updatedAt"],
        ["desc", "desc"]
      ).slice(startAt, endAt)
    case "recommended":
      return _.sortBy(
        products.edges.filter(({ node }) => node.isRecommended),
        "updatedAt",
        "desc"
      )
        .slice(startAt, endAt)
        .map(({ node }) => node)
    case "latest":
      return _.sortBy(
        products.edges
          .filter(
            ({ node }) =>
              new Date().getMonth() - new Date(node.updatedAt).getMonth() <= 1
          )
          .map(({ node }) => node),
        ["updatedAt"],
        ["desc"]
      ).slice(startAt, endAt)
    default:
      return _.sortBy(
        products.edges.map(({ node }) => node),
        ["isRecommended", "updatedAt"],
        ["desc", "desc"]
      ).slice(startAt, endAt)
  }
}
