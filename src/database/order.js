import firebase from "gatsby-plugin-firebase"; 

export const addNewOrder = (user, newOrderItem) => {
  return new Promise (async (resolve, reject) => {
    try {      
      console.log(newOrderItem)
      await firebase.firestore().collection("orders").add(newOrderItem);
      resolve(true)      ;
    } catch (error) {
      reject(error);
    }
  })
}
