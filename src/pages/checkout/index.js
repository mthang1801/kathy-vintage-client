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
import Invoice from "../../components/Checkout/Invoice"
import EmptyProductInCart from "../../components/Checkout/EmptyProductInCart"
import POLICY from "../../constants/policy"
import {totalPriceBeforeTax, totalPriceAfterTax, totalPriceWithShippingFee} from "../../utils/calculateOrderPrice"
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
} from "../../redux/cart/cart.actions"
import Button from "@material-ui/core/Button"
import {navigate} from "gatsby"
import useLanguage from "../../components/Global/useLanguage"
const tax = POLICY.tax;
const CheckoutPage = ({
  cartItems,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
}) => {
  const { theme } = useTheme()
  const {i18n, lang} = useLanguage();
  const {checkout} = i18n.store.data[lang].translation;
  const _totalPriceBeforeTax = totalPriceBeforeTax(cartItems);
  const _totalPriceAfterTax = totalPriceAfterTax(_totalPriceBeforeTax, tax);
  const onClickProceedOrder = () => {
    navigate("/checkout/shipping");
  }
  return (
    <Layout>
      {cartItems.length ? (
        <CheckoutContainer>
          <div>
            {cartItems.map(product => (
              <CheckoutProductItem
                key={`checkout-${product.contentful_id}`}
                product={product}
                increaseProductQuantity={increaseProductQuantity}
                decreaseProductQuantity={decreaseProductQuantity}
                removeProductFromCart={removeProductFromCart}
              />
            ))}
          </div>
          <div>
            <Invoice cartItems={cartItems} totalPriceBeforeTax={_totalPriceBeforeTax} totalPriceAfterTax={_totalPriceAfterTax} />
            <Button
                color="secondary"
                variant="contained"
                style={{ display: "block", width: "100%" }}
                onClick={onClickProceedOrder}
              >
                {checkout.button_proceed_order}
              </Button>
          </div>
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
