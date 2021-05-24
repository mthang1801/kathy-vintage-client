import firebase from "gatsby-plugin-firebase"

export const addNewOrder = (user, newOrderItem) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newOrder = await (
        await firebase.firestore().collection("orders").add(newOrderItem)
      ).get()

      resolve({ id: newOrder.id, ...newOrder.data() })
    } catch (error) {
      reject(error)
    }
  })
}

export const fetchOrders = (userId, lastVisibleOrder) => {
  return new Promise(async (resolve, reject) => {
    try {      
      const LIMIT = 11 ; 

      let ordersList ;
      if(Object.entries(lastVisibleOrder).length){
        ordersList = await firebase
        .firestore()        
        .collection("orders")               
        .where("userId","==",userId)
        .orderBy("createdAt","desc")
        .startAfter(lastVisibleOrder)
        .limit(LIMIT)
        .get()
      }else{
        ordersList = await firebase
        .firestore()        
        .collection("orders")               
        .where("userId","==",userId)
        .orderBy("createdAt","desc")                 
        .limit(LIMIT)
        .get()
      }
      let orders = [] ; 
      
      ordersList.docs.forEach((doc,idx) => {
        if(idx < LIMIT -1){
          orders.push({id: doc.id, ...doc.data()})
        }        
      })      
      const lastOrder = ordersList.docs[ordersList.docs.length - 1];      
      let hasMoreOrders = false; 
      if(orders.length < ordersList.docs.length){
        hasMoreOrders = true; 
      }
      console.log(orders.length, ordersList.docs.length, hasMoreOrders)
      resolve( {orders, lastOrder, hasMoreOrders})
    } catch (error) {
      reject(error)
    }
  })
}

export const cancelOrder = orderId => {
  return new Promise(async (resolve, reject) => {
    try {
      await firebase.firestore().doc(`orders/${orderId}`).update({order_status : "canceled"});
      resolve(true);
    } catch (error) {
      reject(error);
    }
  })
}