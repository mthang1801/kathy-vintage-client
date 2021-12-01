const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://tn-clothes-shop-server.herokuapp.com/payment'
    : 'https://tn-clothes-shop-server.herokuapp.com/payment';

export default PAYMENT_SERVER_URL;
