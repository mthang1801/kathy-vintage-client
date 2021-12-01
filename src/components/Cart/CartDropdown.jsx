import React from 'react';
import {
  Wrapper,
  Title,
  CartItems,
  EmptyItem,
  TotalPrice,
  FooterDropdown,
} from './styles/CartDropdown.styles';
import { ButtonCheckout } from './styles/CartAlert.styles';
import { useTheme } from '../../theme';
import { useLanguage } from '../../locales';
import CartItem from './CartItem';
import { orderTotalPrice } from '../../utils/calculateOrderPrice';
const CartDropdown = ({ cartItems }) => {
  const { theme } = useTheme();
  const {
    translation: { cart },
  } = useLanguage();

  return (
    <Wrapper theme={theme}>
      <Title theme={theme}>{cart.cartPreview}</Title>
      {cartItems.length ? (
        <CartItems>
          {cartItems.map((product) => (
            <CartItem
              key={`cart-product-${product.contentful_id}`}
              product={product}
            />
          ))}
        </CartItems>
      ) : (
        <EmptyItem>{cart.cartEmpty}</EmptyItem>
      )}
      {cartItems.length ? (
        <FooterDropdown theme={theme}>
          <TotalPrice>
            {cart.completePrice} :{' '}
            <strong>
              {orderTotalPrice(cartItems).toLocaleString('de-DE')}
            </strong>
          </TotalPrice>
          <ButtonCheckout to="/checkout">{cart.checkoutButton}</ButtonCheckout>{' '}
        </FooterDropdown>
      ) : null}
    </Wrapper>
  );
};

export default CartDropdown;
