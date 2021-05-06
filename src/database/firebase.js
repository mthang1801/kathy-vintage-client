import firebase from "firebase/app"
import "firebase/firestore"
import "firebase"
import "firebase/auth";

export default new Proxy(
  {
    get firebase() {
      return firebase
    },
    get firestore() {
      return firebase.firestore()
    },
    get auth(){
      return firebase.auth()
    }
  },
  {
    get: function (target, name) {
      if (typeof window !== "undefined") {
        if (!firebase.apps.length) {
          firebase.initializeApp({
            apiKey: "AIzaSyCXMEft0BHsyV5Xaq0-If-0YeeDVKTmFCg",
            authDomain: "tn-clothes-shop.firebaseapp.com",
            projectId: "tn-clothes-shop",
            storageBucket: "tn-clothes-shop.appspot.com",
            messagingSenderId: "256312030338",
            appId: "1:256312030338:web:d3cf87903065523312b09b",
            measurementId: "G-M6VCEL3QYV",
          })
        }
        return target[name]
      }
    },
  }
)
