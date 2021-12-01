import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  selectCart,
  (cart) => cart.cartItems
);

export const selectShowCartDropdown = createSelector(
  selectCart,
  (cart) => cart.showCartDropdown
);

export const selectAlertCart = createSelector(
  selectCart,
  (cart) => cart.alertCart
);
