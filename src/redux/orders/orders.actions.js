import orderActionTypes from './orders.types';
import * as orderDB from '../../database/order';
import POLICY from '../../constants/policy';
const { tax } = POLICY;
const addNewOrderStart = () => ({
  type: orderActionTypes.ADD_NEW_ORDER_START,
});

const addNewOrderSuccess = (order) => ({
  type: orderActionTypes.ADD_NEW_ORDER_SUCCESS,
  payload: order,
});

const addNewOrderFail = (err) => ({
  type: orderActionTypes.ADD_NEW_ORDER_FAIL,
  payload: err,
});

export const addNewOrder = (
  user,
  products,
  shipping_fee,
  totalPrice,
  payment_method,
  shipping_method,
  tokenId
) => (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(addNewOrderStart());
      const newOrderItem = {
        userId: user.uid,
        userInformation: user.information,
        products_line: products.map((product) => ({
          id: product.contentful_id,
          name_en: product.name_en,
          name_vi: product.name_vi,
          unitPrice: product.unitPrice,
          quantity: product.quantity,
          slug: product.slug,
          isDiscount: !!product.isDiscount,
          discountPercentage: product.discountPercentage
            ? product.discountPercentage
            : 0,
          image: product.images[0].file.url,
        })),
        tax,
        shipping_fee,
        totalPrice,
        payment_method,
        shipper: {
          id: null,
          name: null,
        },
        shipping_method,
        shipping_status: {
          sent: new Date(),
          received: null,
          shipping: null,
          complete: null,
        }, //["sent", "received", "shipping", "complete"]
        order_status: 'sent', //["canceled", "sent", "received", "shipping", "complete"]
        createdAt: new Date(),
      };
      if (tokenId) {
        newOrderItem.tokenId = tokenId;
      }
      const newOrderResult = await orderDB.addNewOrder(newOrderItem);
      dispatch(addNewOrderSuccess(newOrderResult));
      resolve(true);
    } catch (error) {
      dispatch(addNewOrderFail(error.message));
      reject(false);
    }
  });
};

export const ordersClearError = () => ({
  type: orderActionTypes.CLEAR_ERROR,
});

const fetchOrdersStart = () => ({
  type: orderActionTypes.FETCH_ORDERS_START,
});

const fetchOrdersSuccess = (orders, lastVisibleOrder, hasMoreOrders) => ({
  type: orderActionTypes.FETCH_ORDERS_SUCCESS,
  payload: { lastVisibleOrder, orders, hasMoreOrders },
});

const fetchOrdersFail = (error) => ({
  type: orderActionTypes.FETCH_ORDERS_FAIL,
  payload: error,
});

export const fetchOrders = (userId, lastVisibleOrder = {}) => async (
  dispatch
) => {
  try {
    dispatch(fetchOrdersStart());
    const { orders, lastOrder, hasMoreOrders } = await orderDB.fetchOrders(
      userId,
      lastVisibleOrder
    );
    dispatch(fetchOrdersSuccess(orders, lastOrder, hasMoreOrders));
  } catch (error) {
    dispatch(fetchOrdersFail(error.message));
  }
};

export const setHasMoreOrders = (boolValue) => ({
  type: orderActionTypes.SET_HAS_MORE_ORDERS,
  payload: boolValue,
});

const cancelOrderStart = () => ({
  type: orderActionTypes.CANCEL_ORDER_START,
});
const cancelOrderSuccess = (orderId) => ({
  type: orderActionTypes.CANCEL_ORDER_SUCCESS,
  payload: orderId,
});
const cancelOrderFail = (error) => ({
  type: orderActionTypes.CANCEL_ORDER_FAIL,
  payload: error,
});

export const cancelOrder = (orderId) => async (dispatch) => {
  try {
    dispatch(cancelOrderStart());
    await orderDB.cancelOrder(orderId);
    dispatch(cancelOrderSuccess(orderId));
  } catch (error) {
    dispatch(cancelOrderFail(error.message));
  }
};
