import cartActionTypes from './cart.types';
import {
  addProductToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
  changeProductInfo,
} from './cart.utils';
const INITIAL_STATE = {
  cartItems: [],
  showCartDropdown: false,
  alertCart: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        showCartDropdown: !state.showCartDropdown,
      };
    case cartActionTypes.CLOSE_CART_DROPDOWN:
      return {
        ...state,
        showCartDropdown: false,
      };
    case cartActionTypes.ADD_PRODUCT_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addProductToCart(state.cartItems, action.payload.product),
        alertCart: true,
      };
    case cartActionTypes.REMOVE_ALERT_CART:
      return {
        ...state,
        alertCart: false,
      };
    case cartActionTypes.INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        cartItems: increaseProductQuantity(state.cartItems, action.payload),
      };
    case cartActionTypes.DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        cartItems: decreaseProductQuantity(state.cartItems, action.payload),
      };
    case cartActionTypes.CLEAR_CART_ITEMS:
      return {
        ...state,
        cartItems: [],
        alertCart: false,
      };
    case cartActionTypes.CHANGE_PRODUCT_CART_INFO:
      return {
        ...state,
        cartItems: changeProductInfo(state.cartItems, action.payload),
      };
    case cartActionTypes.REMOVE_PRODUCT_FROM_CART:
      return {
        cartItems: removeProductFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
