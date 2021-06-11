import { v4 as uuidv4 } from "uuid"
import _ from "lodash"
export const addProductToCart = (cartItems, product) => {
  const checkProductExistedInCart = cartItems.find(item => {
    if (item.contentful_id !== product.contentful_id) return false
    if (
      item.selectedColor &&
      product.selectedColor &&
      item.selectedColor !== product.selectedColor
    )
      return false
    if (
      item.selectedSize &&
      product.selectedSize &&
      item.selectedSize !== product.selectedSize
    )
      return false
    return true
  })
  if (!checkProductExistedInCart) {
    return [...cartItems, { id: uuidv4(), ...product }]
  }
  return cartItems.map(item => {
    if (item.contentful_id === product.contentful_id) {
      if (
        item.selectedColor &&
        product.selectedColor &&
        item.selectedColor === product.selectedColor &&
        item.selectedSize &&
        product.selectedSize &&
        product.selectedSize === item.selectedSize
      )
        return { id: item.id, ...product }
      if (
        item.selectedColor &&
        product.selectedColor &&
        item.selectedColor === product.selectedColor &&
        !item.selectedSize &&
        !product.selectedSize
      )
        return { id: item.id, ...product }
      if (
        item.selectedSize &&
        product.selectedSize &&
        item.selectedSize === product.selectedSize &&
        !item.selectedColor &&
        !product.selectedColor
      )
        return { id: item.id, ...product }
    }
    return item
  })
}

export const mergeDuplicateProductsInCart = cartItems => {
  let newCart = []
  for (let item of cartItems) {
    let productIndex = newCart.findIndex(
      product => product.contentful_id === item.contentful_id
    )
    let product = newCart[productIndex]
    if (product) {
      if (
        product.selectedColor &&
        item.selectedColor &&
        product.selectedColor === item.selectedColor &&
        product.selectedSize &&
        item.selectedSize &&
        product.selectedSize === item.selectedSize
      ) {
        newCart[productIndex] = {
          ...product,
          quantity: product.quantity + item.quantity,
        }
        continue
      } else if (
        product.selectedColor &&
        item.selectedColor &&
        product.selectedColor === item.selectedColor &&
        !product.selectedSize &&
        !item.selectedSize
      ) {
        newCart[productIndex] = {
          ...product,
          quantity: product.quantity + item.quantity,
        }
        continue
      } else if (
        product.selectedSize &&
        item.selectedSize &&
        product.selectedSize === item.selectedSize &&
        !product.selectedColor &&
        !item.selectedColor
      ) {
        newCart[productIndex] = {
          ...product,
          quantity: product.quantity + item.quantity,
        }
        continue
      }
    }
    newCart = [...newCart, { ...item }]
  }
  return newCart
}

export const increaseProductQuantity = (cartItems, product) =>
  cartItems.map(item => {
    if (item.id === product.id) {
      return { ...item, quantity: Math.max(1, item.quantity + 1) }
    }
    return item
  })
export const decreaseProductQuantity = (cartItems, product) =>
  cartItems.map(item => {
    if (item.id === product.id) {
      return { ...item, quantity: Math.max(1, item.quantity - 1) }
    }
    return item
  })

export const removeProductFromCart = (cartItems, product) =>
  cartItems.filter(item => item.id !== product.id)

export const changeProductInfo = (cartItems, product) => {
  const checkProductExistedInCart = cartItems.find(item => {
    if (item.id !== product.id) return false
    if (
      item.selectedColor &&
      product.selectedColor &&
      item.selectedColor !== product.selectedColor
    )
      return false
    if (
      item.selectedSize &&
      product.selectedSize &&
      item.selectedSize !== product.selectedSize
    )
      return false
    return true
  })
  if (checkProductExistedInCart) return cartItems
  return cartItems.map(item => {
    if (item.id === product.id) return { ...product }
    return item
  })
}
