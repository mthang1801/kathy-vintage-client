import React from 'react';
import {
  Wrapper,
  Icon,
  Title,
  Button,
} from './styles/EmptyProductInCart.styles';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useLanguage } from '../../locales';
import { useTheme } from '../../theme';
import { navigate } from 'gatsby';
const EmptyProductInCart = () => {
  const {
    translation: { checkout },
  } = useLanguage();
  const { theme } = useTheme();
  return (
    <Wrapper theme={theme}>
      <Icon>
        <AiOutlineShoppingCart />
      </Icon>

      <Title>{checkout.cartEmpty}</Title>
      <Button onClick={() => navigate('/')}>
        {checkout.buttonContinueShopping}
      </Button>
    </Wrapper>
  );
};

export default EmptyProductInCart;
