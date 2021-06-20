import firebase from "gatsby-plugin-firebase"

export const increaseProductViews = async product => {
  try {
    if(!product.contentful_id) return ;
    const productRef =  firebase.firestore().doc(`products/${product.contentful_id}`);
    const productSnap = await productRef.get();
    if(productSnap.exists){      
      return productRef.update({views : productSnap.data().views ? +productSnap.data().views  + 1 : 1 })
    }
    const newProduct = {...product} ;
    delete newProduct.description_vi;
    delete newProduct.description_en;
    delete newProduct.information_vi;
    delete newProduct.information_en;
    newProduct.views = 1 ; 

    return productRef.set(newProduct)
  } catch (error) {
    console.log(error)    
  }
}