import React, { useState, useEffect } from "react"
import Layout from "../../containers/Layout"
import {
  CheckoutContainer,
  CartItems,
  TemporaryInvoiceSide,
} from "../../styles/checkout.styles"
import { connect } from "react-redux"
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { createStructuredSelector } from "reselect"
import { useTheme } from "../../theme"
import CheckoutProductItem from "../../components/Checkout/CheckoutProductItem"
import TemporaryInvoice from "../../components/Checkout/TemporaryInvoice"
import EmptyProductInCart from "../../components/Checkout/EmptyProductInCart"
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
} from "../../redux/cart/cart.actions"
const CheckoutPage = ({
  cartItems,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
}) => {
  const { theme } = useTheme()
 
  return (
    <Layout>
      {cartItems.length ? (
        <CheckoutContainer>
          <CartItems theme={theme}>
            {cartItems.map(product => (
              <CheckoutProductItem
                key={`checkout-${product.contentful_id}`}
                product={product}
                increaseProductQuantity={increaseProductQuantity}
                decreaseProductQuantity={decreaseProductQuantity}
                removeProductFromCart={removeProductFromCart}
              />
            ))}
          </CartItems>
          <TemporaryInvoiceSide>
            <TemporaryInvoice cartItems={cartItems} />
          </TemporaryInvoiceSide>
        </CheckoutContainer>
      ) : (
        <EmptyProductInCart />
      )}
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

const mapDispatchToProps = dispatch => ({
  increaseProductQuantity: product =>
    dispatch(increaseProductQuantity(product)),
  decreaseProductQuantity: product =>
    dispatch(decreaseProductQuantity(product)),
  removeProductFromCart: product => dispatch(removeProductFromCart(product)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage)
