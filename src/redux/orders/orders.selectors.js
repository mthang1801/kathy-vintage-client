import {createSelector} from "reselect"

const selectOrdersState = state => state.orders;

export const selectOrders = createSelector(selectOrdersState, orders => orders.orders);

export const selectOrdersLoading = createSelector(selectOrdersState, orders => orders.loading);

export const selectOrdersError = createSelector(selectOrdersState, orders => orders.error);

export const selectNewOrder = createSelector(selectOrdersState, orders => orders.newOrder);