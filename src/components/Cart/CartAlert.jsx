import React, { useEffect } from 'react';
import { useLanguage } from '../../locales';
import { useTheme } from '../../theme';
import { Wrapper, ButtonCheckout } from './styles/CartAlert.styles';

const CartAlert = ({ alertCart, removeAlertCart }) => {
  const {
    translation: { cart },
  } = useLanguage();
  const { theme } = useTheme();

  useEffect(() => {
    let timing;
    if (alertCart) {
      clearTimeout(timing);
      timing = setTimeout(() => {
        removeAlertCart();
      }, 5000);
    }
    return () => {
      removeAlertCart();
      clearTimeout(timing);
    };
  }, [alertCart]);
  return (
    <Wrapper theme={theme}>
      <div>{cart.cartAlert}</div>
      <ButtonCheckout to="/checkout">{cart.checkoutButton}</ButtonCheckout>
    </Wrapper>
  );
};

export default CartAlert;
