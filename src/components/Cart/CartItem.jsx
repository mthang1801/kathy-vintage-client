import React from "react"
import {
  Wrapper,
  AvatarContainer,
  ProductContent,
  ProductName,
  ProductInfo,
  ProductQuantityControl,
  ButtonQuantity,
  PruductDetail,
  DeleteProduct,
} from "./styles/CartItem.styles"
import useLanguage from "../Global/useLanguage"
import { useTheme } from "../../theme"
import { connect } from "react-redux"
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
} from "../../redux/cart/cart.actions"
import { BsTrash } from "react-icons/bs"
import QuantityControl from "../Controls/QuantityControl"
import {trackCustomEvent} from "gatsby-plugin-google-analytics"
const CartItem = ({
  product,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
}) => {
  const { i18n, lang } = useLanguage()
  const {cart} = i18n.store.data[lang].translation;
  const { theme } = useTheme()
  const productPrice =
    product.isDiscount && product.discountPercentage
      ? (product.unitPrice * (100 - +product.discountPercentage)) / 100
      : product.unitPrice
  const onRemoveProduct = e => {
    e.preventDefault()
    e.stopPropagation()
    trackCustomEvent({
      action : "Click",
      category: "cart",
      label : "Remove product in cart"
    })
    removeProductFromCart(product)
  }
  return (
    <Wrapper to={`/products/${product.slug}`} theme={theme}>
      <AvatarContainer>
        <img
          src={`https:${product.images[0].file.url}`}
          alt={product[`name_${lang}`]}
        />
      </AvatarContainer>
      <PruductDetail>
        <ProductContent>
          <ProductName>{product[`name_${lang}`]}</ProductName>
          <DeleteProduct onClick={onRemoveProduct}>
            <BsTrash />
          </DeleteProduct>
        </ProductContent>
        <ProductInfo>        
          <div>{cart.quantity}: <strong>{product.quantity}</strong></div>

          <div>
            {cart.totalPrice}: <strong>
              {(productPrice * product.quantity).toLocaleString("de-DE")}
            </strong>
            
          </div>
        </ProductInfo>
      </PruductDetail>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  increaseProductQuantity: product =>
    dispatch(increaseProductQuantity(product)),
  decreaseProductQuantity: product =>
    dispatch(decreaseProductQuantity(product)),
  removeProductFromCart: product => dispatch(removeProductFromCart(product)),
})

export default connect(null, mapDispatchToProps)(CartItem)
