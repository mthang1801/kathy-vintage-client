import React from "react"
import Layout from "../containers/Layout"
import {
  CheckoutContainer,
  CartItems,
  TemporaryInvoiceSide,
} from "../styles/checkout.styles"
import { connect } from "react-redux"
import { selectCartItems } from "../redux/cart/cart.selectors"
import { createStructuredSelector } from "reselect"
import { useTheme } from "../theme"
import CheckoutProductItem from "../components/Checkout/CheckoutProductItem"
import TemporaryInvoice from "../components/Checkout/TemporaryInvoice"
const CheckoutPage = ({ cartItems }) => {
  const { theme } = useTheme()
  return (
    <Layout>
      {cartItems.length ? (
        <CheckoutContainer>
          <CartItems theme={theme}>
            {cartItems.map(product => (
              <CheckoutProductItem key={`checkout-${product.contentful_id}`} product={product}/>
            ))}
          </CartItems>
          <TemporaryInvoiceSide>
            <TemporaryInvoice cartItems={cartItems}/>
          </TemporaryInvoiceSide>
        </CheckoutContainer>
      ) : null}
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
})

export default connect(mapStateToProps)(CheckoutPage)
