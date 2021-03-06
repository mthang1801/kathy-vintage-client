import React, { useEffect } from 'react';
import {
  selectCurrentUser,
  selectUserFetched,
  selectUserLoading,
} from '../redux/user/user.selectors';
import {
  selectOrders,
  selectHasMoreOrders,
  selectOrdersLoading,
  selectOrdersError,
  selectLastVisibleOrder,
  selectOrdersFetched,
} from '../redux/orders/orders.selectors';
import { fetchOrders } from '../redux/orders/orders.actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Layout from '../containers/Layout';
import {
  ContentContainer,
  Title,
  ReadMoreContainer,
  ReadMoreText,
} from '../styles/orders.styles';
import { useLanguage } from '../locales';
import OrderItem from '../components/Order/OrderItem';
import EmptyOrder from '../components/Order/EmptyOrder';
import OrderPageSkeleton from '../components/UI/Lab/Skeleton/OrderPage';
import { navigate } from 'gatsby-link';
import { useLocation } from '@reach/router';
import Seo from '../components/Seo/Seo';
const Orders = ({
  user,
  orders,
  loading,
  error,
  hasMoreOrders,
  fetchOrders,
  lastVisibleOrder,
  userLoading,
  userIsFetched,
  ordersFetched,
}) => {
  const {
    translation: { orders: ordersTranslation, seo },
  } = useLanguage();
  const { pathname } = useLocation();
  useEffect(() => {
    if (user && !ordersFetched) {
      fetchOrders(user.uid);
    }
    if (!user && !userLoading && userIsFetched) {
      navigate('/auth', { state: { from: pathname } });
    }
  }, [user, userLoading, userIsFetched, ordersFetched]);

  const onFetchMoreOrders = () => {
    fetchOrders(user.uid, lastVisibleOrder);
  };
  return (
    <>
      <Seo title={seo.orders} description="Danh sách đơn hàng đã thực hiện" />
      <Layout>
        <ContentContainer>
          <Title>{ordersTranslation.title}</Title>
          {loading && !orders.length ? (
            <OrderPageSkeleton fullScreen />
          ) : (
            <>
              {orders.length ? (
                <div>
                  {orders.map((order) => (
                    <OrderItem
                      key={order.id}
                      order={order}
                      ordersTranslation={ordersTranslation}
                    />
                  ))}
                  {loading && <OrderPageSkeleton />}
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
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  orders: selectOrders,
  loading: selectOrdersLoading,
  error: selectOrdersError,
  hasMoreOrders: selectHasMoreOrders,
  lastVisibleOrder: selectLastVisibleOrder,
  userLoading: selectUserLoading,
  userIsFetched: selectUserFetched,
  ordersFetched: selectOrdersFetched,
});

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: (userId, lastVisibleOrder) =>
    dispatch(fetchOrders(userId, lastVisibleOrder)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
