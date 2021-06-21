import cartActionTypes from "./cart.types"

export const toggleCart = () => ({
  type: cartActionTypes.TOGGLE_CART_DROPDOWN,
})

export const closeCart = () => ({
  type: cartActionTypes.CLOSE_CART_DROPDOWN,
})

export const addProductItemToCart = product => ({
  type: cartActionTypes.ADD_PRODUCT_ITEM_TO_CART,
  payload: { product },
})

export const removeAlertCart = () => ({
  type: cartActionTypes.REMOVE_ALERT_CART,
})

export const increaseProductQuantity = product => ({
  type: cartActionTypes.INCREASE_PRODUCT_QUANTITY,
  payload: product,
})

export const decreaseProductQuantity = product => ({
  type: cartActionTypes.DECREASE_PRODUCT_QUANTITY,
  payload: product,
})

export const removeProductFromCart = product => ({
  type: cartActionTypes.REMOVE_PRODUCT_FROM_CART,
  payload: product,
})

export const clearCartItems = () => ({
  type: cartActionTypes.CLEAR_CART_ITEMS,
})

export const changeProductInfo = product => ({
  type: cartActionTypes.CHANGE_PRODUCT_CART_INFO,
  payload: product,
})
