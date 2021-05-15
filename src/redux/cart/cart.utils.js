export const addProductToCart = (cartItems, product, quantity) => {
  const checkProductExistedInCart = cartItems.find(item => item.contentful_id === product.contentful_id) ; 
  console.log(checkProductExistedInCart)
  if(!checkProductExistedInCart){
    return  [...cartItems, {...product, quantity }]
  }
  return cartItems.map(item => {    
    if(item.contentful_id === product.contentful_id){
      return {...item, quantity};
    }
    return item;
  })
}

export const increaseProductQuantity = (cartItems , product) => cartItems.map(item => {
  if(item.contentful_id === product.contentful_id){
    return {...item, quantity : Math.max(1, item.quantity +1) };
  }
  return item
})
export const decreaseProductQuantity = (cartItems , product) => cartItems.map(item => {
  if(item.contentful_id === product.contentful_id){
    return {...item, quantity : Math.max(1, item.quantity -1) };
  }
  return item
})

export const removeProductFromCart = (cartItems , product) => cartItems.filter(item => item.contentful_id !== product.contentful_id);