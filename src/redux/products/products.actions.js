import productActionTypes from "./products.types"
import * as productDB from "../../database/products"
const fetchBestSellProductsStart = () => ({
  type: productActionTypes.FETCH_BEST_SELL_PRODUCTS_START,
})
const fetchBestSellProductsSuccess = products => ({
  type: productActionTypes.FETCH_BEST_SELL_PRODUCTS_SUCCESS,
  payload: products,
})

export const fetchBestSellProducts = () => async dispatch => {
  try {
    dispatch(fetchBestSellProductsStart())
    const products = await productDB.fetchBestSellProducts()
    dispatch(fetchBestSellProductsSuccess(products))
  } catch (error) {
    console.log(error)
  }
}
