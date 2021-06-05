import React, { useEffect } from "react"
import {
  selectCurrentUser,
  selectUserFetched,
  selectUserLoading,
} from "../../redux/user/user.selectors"
import {
  selectOrders,
  selectHasMoreOrders,
  selectOrdersLoading,
  selectOrdersError,
  selectLastVisibleOrder,
  selectOrdersFetched
} from "../../redux/orders/orders.selectors"
import { fetchOrders } from "../../redux/orders/orders.actions"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"
import {
  ContentContainer,
  ReadMoreContainer,
  ReadMoreText,
} from "./styles/OrdersList.styles"
import {useLanguage} from "../../locales"
import OrderItem from "../Order/OrderItem"
import EmptyOrder from "../Order/EmptyOrder"
import OrderPageSkeleton from "../UI/Lab/Skeleton/OrderPage"
import { navigate } from "gatsby-link"
import { useLocation } from "@reach/router"
import {trackCustomEvent} from "gatsby-plugin-google-analytics"
const Orders = ({
  title,
  user,
  orders,
  loading,
  error,
  hasMoreOrders,
  fetchOrders,
  lastVisibleOrder,
  userLoading,
  userIsFetched,
  ordersFetched
}) => {
  const { translation : {orders : ordersTranslation} } = useLanguage();
  const { pathname } = useLocation()
  useEffect(() => {
    if (user && !ordersFetched) {
      fetchOrders(user.uid)
    }
    if (!user && !userLoading && userIsFetched) {
      navigate("/auth", { state: { from: pathname } })
    }
  }, [user, userLoading, userIsFetched, ordersFetched])

  const onFetchMoreOrders = () => {
    trackCustomEvent({
      action : "Click", 
      category : "orders",
      label : "Fetch more orders"
    })
    fetchOrders(user.uid, lastVisibleOrder)
  }
  return (
    <ContentContainer>
      {loading && !orders.length ? (
        <OrderPageSkeleton userPage />
      ) : (
        <>
          {orders.length ? (
            <div>
              {orders.map(order => (
                <OrderItem
                  key={order.id}
                  order={order}
                  ordersTranslation={ordersTranslation}
                  userPage
                />
              ))}
              {loading && <OrderPageSkeleton userPage />}
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
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  orders: selectOrders,
  loading: selectOrdersLoading,
  error: selectOrdersError,
  hasMoreOrders: selectHasMoreOrders,
  lastVisibleOrder: selectLastVisibleOrder,
  userLoading: selectUserLoading,
  userIsFetched: selectUserFetched,
  ordersFetched : selectOrdersFetched
})

const mapDispatchToProps = dispatch => ({
  fetchOrders: (userId, lastVisibleOrder) =>
    dispatch(fetchOrders(userId, lastVisibleOrder)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
