import firebase from "gatsby-plugin-firebase"
import { ORDER_PER_FETCH } from "../constants/client"
export const addNewOrder = newOrderItem => {
  return new Promise(async (resolve, reject) => {
    try {
      const newOrder = await (
        await firebase.firestore().collection("orders").add(newOrderItem)
      ).get()
      // Create notification
      const notificationItem = {
        collection: "orders",
        documentId: newOrder.id,
        message: `Đơn hàng có mã số <strong>${newOrder.id}</strong> gửi đến ${newOrderItem?.userInformation?.district}, ${newOrderItem?.userInformation?.city} đã được tạo.`,
        alert: `Có một đơn hàng mới được tạo.`,
        status: "success",
        hasSeen : false, 
        createdAt : new Date(),
        updatedAt : new Date()
      }

      await firebase
        .firestore()
        .collection("notifications")
        .add(notificationItem)
      resolve({ id: newOrder.id, ...newOrder.data() })
    } catch (error) {
      reject(error)
    }
  })
}

export const fetchOrders = (userId, lastVisibleOrder) => {
  return new Promise(async (resolve, reject) => {
    try {
      let ordersList
      if (Object.entries(lastVisibleOrder).length) {
        ordersList = await firebase
          .firestore()
          .collection("orders")
          .where("userId", "==", userId)
          .orderBy("createdAt", "desc")
          .startAfter(lastVisibleOrder)
          .limit(ORDER_PER_FETCH)
          .get()
      } else {
        ordersList = await firebase
          .firestore()
          .collection("orders")
          .where("userId", "==", userId)
          .orderBy("createdAt", "desc")
          .limit(ORDER_PER_FETCH)
          .get()
      }
      let orders = []

      ordersList.docs.forEach((doc, idx) => {
        if (idx < ORDER_PER_FETCH - 1) {
          orders.push({ id: doc.id, ...doc.data() })
        }
      })
      const lastOrder = ordersList.docs[ordersList.docs.length - 1]
      let hasMoreOrders = false
      if (orders.length < ordersList.docs.length) {
        hasMoreOrders = true
      }
      resolve({ orders, lastOrder, hasMoreOrders })
    } catch (error) {
      reject(error)
    }
  })
}

export const cancelOrder = orderId => {
  return new Promise(async (resolve, reject) => {
    try {
      //update sold_number from products
      const orderRef = firebase.firestore().doc(`orders/${orderId}`)
      const orderSnap = await orderRef.get()
      if (orderSnap.data()?.products_line?.length) {
        for (let productItem of orderSnap.data().products_line) {
          const productRef = firebase
            .firestore()
            .doc(`products/${productItem.id}`)
          const productSnap = await productRef.get()
          if (productSnap.exists) {
            await productRef.update({
              sold_number:
                productSnap.data().sold_number - productItem.quantity,
            })
          }
        }
      }
      //notification cancel
      const notificationSnap = await firebase
        .firestore()
        .collection("notifications")
        .where("collection", "==", "orders")
        .where("documentId", "==", orderSnap.id)
        .get()
      if (notificationSnap.docs.length === 1) {
        const notificationId = notificationSnap.docs[0].id
        await firebase
          .firestore()
          .doc(`notifications/${notificationId}`)
          .update({
            message: `Đơn hàng có mã số <strong>${orderSnap.id}</strong> đã hủy.`,
            alert: "Có đơn hàng bị hủy.",
            status: "error",
            hasSeen : false,
            createdAt : new Date(),
            updatedAt : new Date()
          })
      }

      //update order status
      await orderRef.update({ order_status: "canceled" })
      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}
