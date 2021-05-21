import orderActionTypes from "./orders.types"
import * as orderDB from "../../database/order"
import POLICY from "../../constants/policy"
const {tax} = POLICY
const addNewOrderStart = () => ({
  type: orderActionTypes.ADD_NEW_ORDER_START,
})

const addNewOrderSuccess = order => ({
  type: orderActionTypes.ADD_NEW_ORDER_SUCCESS,
  payload: order,
})

const addNewOrderFail = err => ({
  type: orderActionTypes.ADD_NEW_ORDER_FAIL,
  payload: err,
})

export const addNewOrder = (
  user,
  products,
  shipping_fee,
  payment_method,
  shipping_method,
  tokenId
) => dispatch => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch(addNewOrderStart())
      console.log(user)
      const newOrderItem = {        
        userId : user.uid, 
        userInformation : user.information,
        products_line: products.map(product => ({
          name_en: product.name_en,
          name_vi: product.name_vi,
          unitPrice: product.unitPrice,
          quantity: product.quantity,
          slug : product.slug, 
          isDiscount: !!product.isDiscount,
          discountPercentage: product.discountPercentage
            ? product.discountPercentage
            : 0,
          image: product.images[0].file.url,
        })),        
        tax, 
        shipping_fee, 
        payment_method,
        shipping_method
      }     
      if(tokenId){
        newOrderItem.tokenId = tokenId;
      }
      const newOrderResult = await orderDB.addNewOrder(user, newOrderItem)
      dispatch(addNewOrderSuccess(newOrderResult))      
      resolve(true)
    } catch (error) {
      dispatch(addNewOrderFail(error.message)) ;
      reject(false);
    }
  })
}


export const ordersClearError = () => ({
  type : orderActionTypes.CLEAR_ERROR
})