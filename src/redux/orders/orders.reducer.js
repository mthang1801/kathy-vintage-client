import orderActionTypes from './orders.types';
import _ from 'lodash';
import { cancelOrderUtils } from './orders.utils';
const INITIAL_STATE = {
  orders: [],
  fetched: false,
  newOrder: null,
  loading: true,
  lastVisibleOrder: {},
  hasMoreOrders: true,
  error: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case orderActionTypes.ADD_NEW_ORDER_START:
    case orderActionTypes.FETCH_ORDERS_START:
    case orderActionTypes.CANCEL_ORDER_START:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case orderActionTypes.SET_HAS_MORE_ORDERS:
      return {
        ...state,
        hasMoreOrders: action.payload,
      };
    case orderActionTypes.ADD_NEW_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: state.orders.length
          ? [{ ...action.payload }, ...state.orders]
          : [...state.orders],
        newOrder: action.payload,
      };
    case orderActionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        fetched: true,
        orders: _.unionBy([...state.orders, ...action.payload.orders], 'id'),
        lastVisibleOrder: { ...action.payload.lastVisibleOrder },
        hasMoreOrders: action.payload.hasMoreOrders,
      };
    case orderActionTypes.CANCEL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: cancelOrderUtils(state.orders, action.payload),
      };
    case orderActionTypes.CLEAR_ERROR:
      return {
        ...state,
        error: undefined,
      };
    case orderActionTypes.ADD_NEW_ORDER_FAIL:
    case orderActionTypes.CANCEL_ORDER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case orderActionTypes.FETCH_ORDERS_FAIL:
      return {
        ...state,
        fetched: true,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
