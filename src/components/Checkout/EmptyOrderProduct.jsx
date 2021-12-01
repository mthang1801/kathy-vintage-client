import React from 'react';
import {
  Wrapper,
  ImageContainer,
  Title,
  Button,
} from './styles/EmptyProductInCart.styles';

import { useLanguage } from '../../locales';
import EmptyFolder from '../../images/empty-folder.jpg';
import { useTheme } from '../../theme';
import { navigate } from 'gatsby';

const EmptyOrder = () => {
  const {
    translation: { checkout },
  } = useLanguage();
  const { theme } = useTheme();
  const onBackHome = () => {
    navigate('/');
  };
  return (
    <Wrapper theme={theme}>
      <ImageContainer>
        <img src={EmptyFolder} alt="empty order" />
      </ImageContainer>

      <Title>{checkout.orderEmpty}</Title>
      <Button onClick={onBackHome}>{checkout.buttonBackHome}</Button>
    </Wrapper>
  );
};

export default EmptyOrder;
