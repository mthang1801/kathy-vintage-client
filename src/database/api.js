import firebase from "./firebase"

const user = {
  name: "Mai Van Thang",
  email: "mthang1801@gmail.com",
  phone: "0939323700",
  location: {
    country: "Vietnam",
    city : "Can Tho",    
    address: "quang trung go vap",
  },
  createdAt : new Date()
}

const users = [
  {
    name: "Raja",
    email: "raja.tamil@email.com",
    age : 14,
    gender : "male",
    createdAt: new Date("2019-01-01 12:08:00"),    
  },
  {
    name: "Arivu",
    email: "arivu.selvan@email.com",
    age : 25, 
    gender : "male",
    createdAt: new Date("2018-01-23 09:13:00"),    
  },
  {
    name: "Mike",
    email: "mike.author@email.com",
    age : 62,
    gender : "male",
    createdAt: new Date("2018-08-08 06:37:00"),
  },
  {
    name: "Praba",
    email: "praba.karan@email.com",
    gender : "female",
    age : 46,
    createdAt: new Date("2018-10-09 18:26:00"),
  },
  {
    name: "Muhammad",
    email: "muhammad.ali@email.com",
    gender : "female",
    age : 12 ,
    createdAt: new Date("2018-03-13 12:13:00"),
  },
  {
    name : "Cristiano Ronaldo",
    email : "cr7.ronaldo@gmail.com",
    gender : "male",
    age : 36,
    createdAt : new Date()
  }
]

export const createData = () => {
  users.forEach(user => {
    firebase.firestore.collection("users").doc().set(user);
  })
}

export const getData = () => {
  return new Promise(async  (resolve, reject) => {
    try {
      const snap = await firebase.firestore.collection("users").orderBy("age","desc").limit(2).get();
      let users = []
      snap.forEach(doc => {        
        console.log()
        users  = [...users, {id : doc.id, ...doc.data(), createdAt : new Date(doc.data().createdAt.seconds* 1000).toLocaleString()}] ;        
      })
      const counts =  await firebase.firestore.collection("counts").orderBy("value","asc").startAt(40).limit(10).get();
      
      resolve(users);
    } catch (error) {
      reject(error)
    }
  })
  
}

export const getSingleUser = id => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await firebase.firestore.collection("users").doc(id).get();
      const post = await firebase.firestore.collection("users").doc(id).collection("posts").doc("I5D2sHzavs7HFv3xkONs").get();
      
      resolve(user.data());
    } catch (error) {
      reject(error);
    }
  })
}


