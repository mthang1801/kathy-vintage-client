import React, { useEffect } from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import { clearCartItems } from "../../redux/cart/cart.actions"
import { selectNewOrder } from "../../redux/orders/orders.selectors"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import Layout from "../../containers/Layout"
import { useLocation } from "@reach/router"
import EmptyOrderProduct from "../../components/Checkout/EmptyOrderProduct"
import { ContentContainer } from "../../styles/checkout.payment.styles"
import {Wrapper, ImageContainer} from "../../styles/checkout.complete.styles"
import {BiCheckCircle} from "react-icons/bi"
import { useTheme } from "../../theme"
import useLanguage from "../../components/Global/useLanguage"
import POLICY from "../../constants/policy";
import calculateEstimateTimeDilivery from "../../utils/calculateEstimateTimeDilivery"
const CheckoutComplete = ({ order, clearCartItems, user }) => {
  const { state } = useLocation()
  const {theme} = useTheme();
  const {i18n, lang} = useLanguage();
  const {complete} = i18n.store.data[lang].translation.checkout;
  useEffect(() => {
    if (state?.from === "/checkout/payment") {
      // clearCartItems();
    }
  }, [state])
  const {estimateTimeDelivery : estimateTimeDeliveryPolicy} = POLICY;
  let estimateTime;
  if(order?.shipping_method){
    const {hours, days} = estimateTimeDeliveryPolicy[order?.shipping_method];
    estimateTime = calculateEstimateTimeDilivery(days, hours)
  }
  
  return (
    <Layout>
      <ContentContainer>
        {order ? <Wrapper theme={theme}>
          <ImageContainer>
            <BiCheckCircle/>
          </ImageContainer>
          <div >{complete.header_letter}</div>
        {user.email && order && estimateTime && <div dangerouslySetInnerHTML={{__html : complete.body_letter(order.id, estimateTime, user.email)}}></div>}
        </Wrapper> : <EmptyOrderProduct />}
      </ContentContainer>
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  order: selectNewOrder,
  user : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  clearCartItems: () => dispatch(clearCartItems()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComplete)
