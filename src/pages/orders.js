import React, { useEffect } from "react"
import { selectCurrentUser, selectUserFetched, selectUserLoading } from "../redux/user/user.selectors"
import {
  selectOrders,
  selectHasMoreOrders,
  selectOrdersLoading,
  selectOrdersError,
  selectLastVisibleOrder,
} from "../redux/orders/orders.selectors"
import { fetchOrders } from "../redux/orders/orders.actions"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import Layout from "../containers/Layout"
import {
  ContentContainer,
  Title,
  ReadMoreContainer,
  ReadMoreText,
} from "../styles/orders.styles"
import useLanguage from "../components/Global/useLanguage"
import OrderItem from "../components/Order/OrderItem"
import EmptyOrder from "../components/Order/EmptyOrder"
import OrderPageSkeleton from "../components/UI/Lab/Skeleton/OrderPage"
import { navigate } from "gatsby-link"
import {useLocation} from "@reach/router"
import {trackCustomEvent} from "gatsby-plugin-google-analytics"
import SEO from "../components/SEO/SEO"
const Orders = ({
  user,
  orders,
  loading,
  error,
  hasMoreOrders,
  fetchOrders,
  lastVisibleOrder,
  userLoading, userIsFetched
}) => {
  const { i18n, lang } = useLanguage()
  const { orders: ordersTranslation, seo } = i18n.store.data[lang].translation;
  const {pathname} = useLocation();
  useEffect(() => {
    if (user) {
      fetchOrders(user.uid)
    }
    if(!user && !userLoading && userIsFetched){
      navigate("/auth", {state : {from : pathname}})
    }
  }, [user, userLoading, userIsFetched])

  

  const onFetchMoreOrders = () => {
    trackCustomEvent({
      action : "Click",
      category : "orders",
      label : "Fetch more orders"
    })
    fetchOrders(user.uid, lastVisibleOrder)
  }
  return (
    <>
    <SEO title={seo.orders} description="Danh sách đơn hàng đã thực hiện"/>
    <Layout>
      <ContentContainer>
        <Title>{ordersTranslation.title}</Title>        
        {loading && !orders.length? (
          <OrderPageSkeleton fullScreen/>
        ) : (
          <>            
            {orders.length ? (
              <div>
                {orders.map(order => (
                  <OrderItem
                    key={order.id}
                    order={order}
                    ordersTranslation={ordersTranslation}
                  />
                ))}
                {loading && <OrderPageSkeleton /> }
                {hasMoreOrders && (
                  <ReadMoreContainer onClick={onFetchMoreOrders}>
                    <ReadMoreText>
                      {ordersTranslation.readMoreOrders}
                    </ReadMoreText>
                  </ReadMoreContainer>
                )}
              </div>
            ) : (
              <EmptyOrder />
            )}
          </>
        )}
      </ContentContainer>
    </Layout>
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  orders: selectOrders,
  loading: selectOrdersLoading,
  error: selectOrdersError,
  hasMoreOrders: selectHasMoreOrders,
  lastVisibleOrder: selectLastVisibleOrder,
  userLoading : selectUserLoading,
  userIsFetched : selectUserFetched
})

const mapDispatchToProps = dispatch => ({
  fetchOrders: (userId, lastVisibleOrder) =>
    dispatch(fetchOrders(userId, lastVisibleOrder)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
