import React, { useState } from "react"
import Layout from "../../containers/Layout"
import {
  ContentContainer,
  Wrapper,
  Title,
} from "../../styles/checkout.payment.styles"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { selectCartItems } from "../../redux/cart/cart.selectors"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import CheckoutPaymentTypeOfShipping from "../../components/Checkout/CheckoutPaymentTypeOfShipping"
import useLanguage from "../../components/Global/useLanguage"
import Invoice from "../../components/Checkout/Invoice"
import EmptyProductInCart from "../../components/Checkout/EmptyProductInCart"
import { useTheme } from "../../theme"
import CheckoutPaymentOrderedProductItem from "../../components/Checkout/CheckoutPaymentOrderedProductItem"
const Payment = ({ cartItems, user }) => {
  const { i18n, lang } = useLanguage()
  const { payment } = i18n.store.data[lang].translation.checkout
  const {theme} = useTheme();
  const [shippingType, setShippingType] = useState(
    payment.typeOfShipping.standard
  )
  return (
    <Layout>
      {cartItems.length ? (
        <ContentContainer>
          <div>
            <Title>1. {payment.typeOfShipping.title}</Title>
            <Wrapper theme={theme}>
              <CheckoutPaymentTypeOfShipping
                user={user}
                cartItems={cartItems}
                types={payment.typeOfShipping}
                shippingType={shippingType}
                setShippingType={setShippingType}
              />
              <p>{payment.listOfOrderedProducts}</p>
              {cartItems.map(product => (
                <CheckoutPaymentOrderedProductItem key={product.contentful_id} shippingType={shippingType} product={product}/>
              ))}
            </Wrapper>
          </div>
          <div>
            <Invoice cartItems={cartItems} shippingFee={10000} />
          </div>
        </ContentContainer>
      ) : (
        <EmptyProductInCart />
      )}
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  user: selectCurrentUser,
})

export default connect(mapStateToProps)(Payment)
