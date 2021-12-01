import React from 'react';
import Button from '@material-ui/core/Button';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { useStyles } from './styles/CartButton.styles';
import { useLanguage } from '../../locales';
const CartButton = () => {
  const classes = useStyles();
  const {
    translation: { cart },
  } = useLanguage();

  return (
    <Button
      variant="outlined"
      color="primary"
      className={classes.button}
      startIcon={<ShoppingCart />}
    >
      {cart.name} : 5
    </Button>
  );
};

export default CartButton;
