import { createSelector } from "reselect"

const selectProducts = state => state.products

export const selectBestSellProducts = createSelector(
  selectProducts,
  products => products.bestSellProducts
)
export const selectFetchedProducts = createSelector(
  selectProducts,
  products => products.fetched
)

export const selectProductsLoading = createSelector(
  selectProducts,
  products => products.loading
)
