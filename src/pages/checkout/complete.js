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
import { Wrapper, ImageContainer, ButtonGroup } from "../../styles/checkout.complete.styles"
import { BiCheckCircle } from "react-icons/bi"
import { useTheme } from "../../theme"
import useLanguage from "../../components/Global/useLanguage"
import POLICY from "../../constants/policy"
import calculateEstimateTimeDilivery from "../../utils/calculateEstimateTimeDilivery"
import Button from "@material-ui/core/Button"
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined"
import { navigate } from "gatsby"
import {trackCustomEvent} from "gatsby-plugin-google-analytics"
const CheckoutComplete = ({ order, clearCartItems, user }) => {
  const { state } = useLocation()
  const { theme } = useTheme()
  const { i18n, lang } = useLanguage()
  const { complete } = i18n.store.data[lang].translation.checkout
  useEffect(() => {
    if (state?.from === "/checkout/payment") {
      clearCartItems()
    }
  }, [state])
  const { estimateTimeDelivery: estimateTimeDeliveryPolicy } = POLICY
  let estimateTime
  if (order?.shipping_method) {
    const { hours, days } = estimateTimeDeliveryPolicy[order?.shipping_method]
    estimateTime = calculateEstimateTimeDilivery(days, hours)
  }

  return (
    <Layout>
      <ContentContainer>
        {order?.userId === user?.uid ? (
          <Wrapper theme={theme}>
            <ImageContainer>
              <BiCheckCircle />
            </ImageContainer>
            <div>{complete.header_letter}</div>
            {user.email && order && estimateTime && (
              <div
                dangerouslySetInnerHTML={{
                  __html: complete.body_letter(
                    order.id,
                    estimateTime,
                    user.email
                  ),
                }}
              ></div>
            )}
            <ButtonGroup>
              <Button
                color="primary"
                variant="contained"
                onClick={() => {
                  trackCustomEvent({
                    action : "Click",
                    category : "navigate",
                    label : "Complete, go home"
                  })
                  navigate("/")}}
              >
                <HomeOutlinedIcon/>
                {complete.backHomeButton}
              </Button>
            </ButtonGroup>
          </Wrapper>
        ) : (
          <EmptyOrderProduct />
        )}
      </ContentContainer>
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  order: selectNewOrder,
  user: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  clearCartItems: () => dispatch(clearCartItems()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutComplete)
