import React from "react"
import Button from "@material-ui/core/Button"
import ShoppingCart from "@material-ui/icons/ShoppingCart"
import {useStyles} from "./styles/CartButton.styles"
import useLanguage from "../Global/useLanguage"
const CartButton = () => {
  const classes = useStyles()
  const {i18n, lang}= useLanguage();
  const {cart} = i18n.store.data[lang].translation
  
  return (
    <Button
      variant="outlined"
      color="primary"
      className={classes.button}
      startIcon={<ShoppingCart />}
    >
      {cart.name}
    </Button>
  )
}

export default CartButton
