import React from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai";
import {Wrapper, CartIcon, CartNumber} from "./styles/Cart.styles"
const Cart = () => {
  return (
    <Wrapper to="/cart">
      <CartIcon><AiOutlineShoppingCart/></CartIcon>
      <CartNumber>5</CartNumber>
    </Wrapper>
  )
}

export default Cart
