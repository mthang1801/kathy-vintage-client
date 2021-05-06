import firebase from "./firebase"

const avatarMale = "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?b=1&k=6&m=846183008&s=612x612&w=0&h=ZC65KHQwZj_-NvgmW8EAhNEVWjbOSUBfJXJxHXxhVrk=";
const avatarFemale = "https://coek.dypgroup.edu.in/wp-content/uploads/2019/06/depositphotos_121233300-stock-illustration-female-default-avatar-gray-profile-300x300.jpg"

const addUserToProfileDocument = (userAuth, data)  => {
  return new Promise(async (resolve, reject) => {
    if(!userAuth) return false ;   
    const userRef = firebase.firestore.doc(`users/${userAuth?.uid}`);
    const userSnap = await userRef.get();
    if(!userSnap.exists){
      console.log(data, userRef);
      try {
        await userRef.set({
          ...data,           
          photoURL : data.gender === "male" ? avatarMale : avatarFemale,
          createdAt : new Date()
        })  
      } catch (error) {
        console.log(error);
        reject(error);
      }      
    }
    resolve(userRef) 
  })
  
}

export const createUserWithEmailAndPassword = (name, gender, email, password) => {
  return new Promise( async (resolve, reject) => {
    try {
      firebase.firestore.collection("users").where("email", "==", email).get().then(snap => console.log(snap));      
      
      const userAuth = await firebase.auth.createUserWithEmailAndPassword(email, password);
      const userRef = await addUserToProfileDocument(userAuth.user, {displayName: name, gender, email, password});
      const user = await userRef.get();
      resolve(user.data());
    } catch (error) {
      reject(error)
    }
  })
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubsribe = firebase.auth.onAuthStateChanged( async userAuth => {
      unsubsribe();            
      const user = await firebase.firestore.doc(`users/${userAuth?.uid}`).get();      
      if(!user.exists){
        return resolve(null);
      }
      resolve(user.data())
    }, reject)
  })
}

export const signOutUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      await firebase.auth.signOut()
      resolve(true)
    } catch (error) {
      reject(error)
    }
  })
}

export const signInUser = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userAuth = await firebase.auth.signInWithEmailAndPassword(email, password);        
      const user = await firebase.firestore.doc(`users/${userAuth?.user?.uid}`).get();
      if(!user.exists){
        return resolve(null);
      }
      const userResult = {...user.data()};
      delete userResult.password;
      resolve(userResult);
    } catch (error) {
      reject(error);
    }
  })
}

export const signInWithGoogle = () => {
  return new Promise(async (resolve, reject) => {
    try {      
      const GoogleProvider = new firebase.firebase.auth.GoogleAuthProvider();
      GoogleProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
      GoogleProvider.setCustomParameters({prompt : "select_account"});
      const {user} = await firebase.auth.signInWithPopup(GoogleProvider)
      if(user.providerData.length){
        return resolve(user.providerData[0]);
      }
      resolve(null)
    } catch (error) {
      reject(error);
    }
  })
}
export const signInWithFacebook = () => {
  return new Promise(async (resolve, reject) => {
    try {      
      const FacebookProvider = new firebase.firebase.auth.FacebookAuthProvider();      
      FacebookProvider.setCustomParameters({'display': 'popup'});
      const {user} = await firebase.auth.signInWithPopup(FacebookProvider)
      console.log(user)
      if(user.providerData.length){
        return resolve(user.providerData[0]);
      }
      resolve(null)
    } catch (error) {
      reject(error);
    }
  })
}