import React, { useEffect } from "react"
import { selectCurrentUser } from "../redux/user/user.selectors"
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
const Orders = ({
  user,
  orders,
  loading,
  error,
  hasMoreOrders,
  fetchOrders,
  lastVisibleOrder,
}) => {
  const { i18n, lang } = useLanguage()
  const { orders: ordersTranslation } = i18n.store.data[lang].translation
  useEffect(() => {
    if (user) {
      fetchOrders(user.uid)
    }
  }, [user])

  const onFetchMoreOrders = () => {
    fetchOrders(user.uid, lastVisibleOrder)
  }
  return (
    <Layout>
      <ContentContainer>
        <Title>{ordersTranslation.title}</Title>
        {loading && !orders.length? (
          <OrderPageSkeleton />
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
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  orders: selectOrders,
  loading: selectOrdersLoading,
  error: selectOrdersError,
  hasMoreOrders: selectHasMoreOrders,
  lastVisibleOrder: selectLastVisibleOrder,
})

const mapDispatchToProps = dispatch => ({
  fetchOrders: (userId, lastVisibleOrder) =>
    dispatch(fetchOrders(userId, lastVisibleOrder)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
