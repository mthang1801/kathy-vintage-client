import React from 'react'
import Layout from "../../containers/Layout"
import {ContentContainer, Title} from "../../styles/checkout.payment.styles"
import {selectCurrentUser} from "../../redux/user/user.selectors"
import {selectCartItems} from "../../redux/cart/cart.selectors"
import {createStructuredSelector} from "reselect"
import {connect} from "react-redux"
import CheckoutPaymentTypeOfShipping from "../../components/Checkout/CheckoutPaymentTypeOfShipping"
import useLanguage from "../../components/Global/useLanguage"
import Invoice from "../../components/Checkout/Invoice"
const Payment = ({cartItems , user}) => {
  const {i18n, lang} = useLanguage();
  const {payment} = i18n.store.data[lang].translation.checkout; 
  return (
    <Layout>
      <ContentContainer>
        <div>
          <Title>1. {payment.typeOfShipping}</Title>           
          <CheckoutPaymentTypeOfShipping user={user} cartItems={cartItems}/>
        </div>
        <div>
          <Invoice cartItems={cartItems} shippingFee={10000}/>
        </div>
      </ContentContainer>
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems,
  user : selectCurrentUser
})

export default connect(mapStateToProps)(Payment)
