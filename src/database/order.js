import firebase from "gatsby-plugin-firebase"

export const addNewOrder = (user, newOrderItem) => {
  return new Promise(async (resolve, reject) => {
    try {
      const newOrder = await (
        await firebase.firestore().collection("orders").add(newOrderItem)
      ).get()
      
      resolve({id : newOrder.id, ...newOrder.data()})
    } catch (error) {
      reject(error)
    }
  })
}
