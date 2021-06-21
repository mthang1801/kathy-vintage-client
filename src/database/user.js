import firebase from "gatsby-plugin-firebase"
import { getDeviceType } from "../utils/getDeviceType"
const avatarMale =
  "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?b=1&k=6&m=846183008&s=612x612&w=0&h=ZC65KHQwZj_-NvgmW8EAhNEVWjbOSUBfJXJxHXxhVrk="
const avatarFemale =
  "https://coek.dypgroup.edu.in/wp-content/uploads/2019/06/depositphotos_121233300-stock-illustration-female-default-avatar-gray-profile-300x300.jpg"

const addUserToProfileDocument = (userAuth, data) => {
  return new Promise(async (resolve, reject) => {
    if (!userAuth) return false
    const userRef = firebase.firestore().doc(`users/${userAuth?.uid}`)
    const userSnap = await userRef.get()
    if (!userSnap.exists) {
      if (data.password) {
        delete data.password
      }
      try {
        await userRef.set({
          ...data,
          user_type: "normal",
          photoURL: data.photoURL
            ? data.photoURL
            : data?.gender === "male"
            ? avatarMale
            : avatarFemale,
          createdAt: new Date(),
        })
      } catch (error) {
        reject(error)
      }
    }
    resolve(userRef)
  })
}

export const createUserWithEmailAndPassword = (
  name,
  gender,
  email,
  password
) => {
  return new Promise(async (resolve, reject) => {
    try {
      firebase
        .firestore()
        .collection("users")
        .where("email", "==", email)
        .get()
        .then(snap => console.log(snap))

      const userAuth = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
      const userRef = await addUserToProfileDocument(userAuth.user, {
        displayName: name,
        gender,
        email,
        password,
        providerId: "email-password",
      })
      const user = await userRef.get()
      resolve(user.data())
    } catch (error) {
      reject(error)
    }
  })
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubsribe = firebase.auth().onAuthStateChanged(async userAuth => {
      unsubsribe()
      const user = await firebase
        .firestore()
        .doc(`users/${userAuth?.uid}`)
        .get()
      if (!user.exists) {
        return resolve(null)
      }
      const userResult = { uid: user.id, ...user.data() }
      delete userResult.password
      resolve(userResult)
    }, reject)
  })
}

export const signOutUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await firebase.auth().signOut()
      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

export const signInUser = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userAuth = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)

      const user = await firebase
        .firestore()
        .doc(`users/${userAuth?.user?.uid}`)
        .get()
      if (!user.exists) {
        return resolve(null)
      }
      const userResult = { uid: userAuth.user.uid, ...user.data() }
      delete userResult.password
      resolve(userResult)
    } catch (error) {
      reject(error)
    }
  })
}

export const signInWithGoogle = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const GoogleProvider = new firebase.auth.GoogleAuthProvider()
      GoogleProvider.addScope(
        "https://www.googleapis.com/auth/contacts.readonly"
      )
      GoogleProvider.setCustomParameters({ prompt: "select_account" })
      const { user } = await firebase.auth().signInWithPopup(GoogleProvider)
      // getDeviceType() !== "desktop"
      //   ? await firebase.auth().signInWithRedirect(GoogleProvider)
      //   :    await firebase.auth().signInWithPopup(GoogleProvider)
      const userInfo = { ...user?.providerData[0], uid: user.uid }
      if (userInfo) {
        await addUserToProfileDocument(user, userInfo)
        const userDatabase = await firebase
          .firestore()
          .doc(`users/${user.uid}`)
          .get()
        const userResult = { uid: user.uid, ...userDatabase.data() }
        return resolve(userResult)
      }
      resolve(null)
    } catch (error) {
      reject(error)
    }
  })
}
export const signInWithFacebook = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const FacebookProvider = new firebase.auth.FacebookAuthProvider()
      FacebookProvider.setCustomParameters({ display: "popup" })

      const { user } = await firebase.auth().signInWithPopup(FacebookProvider)
      // getDeviceType() !== "desktop"
      //   ? await firebase.auth().signInWithRedirect(FacebookProvider)
      //   : await firebase.auth().signInWithPopup(FacebookProvider)
      const userInfo = { ...user?.providerData[0], uid: user.uid }
      if (userInfo) {
        await addUserToProfileDocument(user, userInfo)
        const userDatabase = await firebase
          .firestore()
          .doc(`users/${user.uid}`)
          .get()
        const userResult = { uid: user.uid, ...userDatabase.data() }
        return resolve(userResult)
      }
      resolve(null)
    } catch (error) {
      reject(error)
    }
  })
}

export const restoreAccount = email => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkEmailExisted = await (
        await firebase
          .firestore()
          .collection("users")
          .where("email", "==", email)
          .get()
      ).size
      if (!checkEmailExisted) {
        throw new Error("User not found")
      }
      await firebase.auth().sendPasswordResetEmail(email)
      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

export const updateUserInformation = information => {
  return new Promise(async (resolve, reject) => {
    try {
      const { currentUser } = firebase.auth()
      if (!currentUser) {
        reject(new Error("User not found"))
      }
      await firebase
        .firestore()
        .doc(`users/${currentUser.uid}`)
        .update({ information: information, updatedAt: new Date() })
      const updatedUser = await firebase
        .firestore()
        .doc(`users/${currentUser.uid}`)
        .get()
      resolve(updatedUser.data())
    } catch (error) {
      reject(error)
    }
  })
}

export const updateUserPaymentAndShippingMethod = paymentMethod => {
  return new Promise(async (resolve, reject) => {
    try {
      const { currentUser } = firebase.auth()
      if (!currentUser) {
        reject(new Error("User not found"))
      }
      await firebase
        .firestore()
        .doc(`users/${currentUser.uid}`)
        .set({ information: { paymentMethod } }, { merge: true })
      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

export const updatePassword = (oldPassword, newPassword) => {
  return new Promise(async (resolve, reject) => {
    try {
      //check old password if correct
      const userAuth = await firebase.auth().currentUser
      const credential = firebase.auth.EmailAuthProvider.credential(
        firebase.auth().currentUser.email,
        oldPassword
      )
      await userAuth.reauthenticateWithCredential(credential)
      //after checking password correctly, proceed to update new password
      firebase.auth().currentUser.updatePassword(newPassword)

      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}
