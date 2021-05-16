import React from "react"
import {
  Wrapper,
  Title,
  CartItems,
  EmptyItem,
} from "./styles/CartDropdown.styles"
import {ButtonCheckout} from "./styles/CartAlert.styles"
import { useTheme } from "../../theme"
import useLanguage from "../Global/useLanguage"
import CartItem from "./CartItem"

const CartDropdown = ({ cartItems }) => {
  const { theme } = useTheme()
  const { i18n, lang } = useLanguage()
  const { cart } = i18n.store.data[lang].translation

  return (
    <Wrapper theme={theme}>
      <Title theme={theme}>{cart.cartPreview}</Title>
      {cartItems.length ? (
        <CartItems>
          {cartItems.map(product => (
            <CartItem
              key={`cart-product-${product.contentful_id}`}
              product={product}
            />
          ))}
        </CartItems>
      ) : (
        <EmptyItem>{cart.cartEmpty}</EmptyItem>
      )}
      <ButtonCheckout to="/checkout">{cart.checkoutButton}</ButtonCheckout>
    </Wrapper>
  )
}

export default CartDropdown
