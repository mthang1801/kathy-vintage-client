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
      const LIMIT = 10 ; 

      let ordersList ;
      if(Object.entries(lastVisibleOrder).length){
        ordersList = await firebase
        .firestore()        
        .collection("orders")               
        .where("userId","==",userId)
        .orderBy("createdAt","desc")
        .startAfter(lastVisibleOrder).limit(LIMIT)
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
      ordersList.docs.forEach(doc => {
        orders.push(doc.data())
      })
      const lastOrder = ordersList.docs[ordersList.docs.length - 1];      
      
      resolve( {orders, lastOrder})
    } catch (error) {
      reject(error)
    }
  })
}
