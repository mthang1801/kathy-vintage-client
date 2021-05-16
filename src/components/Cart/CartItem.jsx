import React from "react"
import {
  Wrapper,
  AvatarContainer,
  ProductContent,
  ProductName,
  ProductInfo,
  ProductQuantityControl,
  ButtonQuantity,
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
const CartItem = ({
  product,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
}) => {
  const { i18n, lang } = useLanguage()
  const { theme } = useTheme()
  const productPrice =
    product.isDiscount && product.discountPercentage
      ? (product.unitPrice * (100 - +product.discountPercentage)) / 100
      : product.unitPrice
  const onIncreaseProductQuantity = e => {
    e.preventDefault()
    e.stopPropagation()
    increaseProductQuantity(product)
  }

  const onDecreaseProductQuantity = e => {
    e.preventDefault()
    e.stopPropagation()
    decreaseProductQuantity(product)
  }
  const onRemoveProduct = e => {
    e.preventDefault()
    e.stopPropagation()
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
      <ProductContent>
        <ProductName>{product[`name_${lang}`]}</ProductName>
        <ProductInfo>
          <div>{productPrice} x</div>
          <ProductQuantityControl>
            <ButtonQuantity onClick={onDecreaseProductQuantity}>
              &lt;
            </ButtonQuantity>
            <span>{product.quantity}</span>
            <ButtonQuantity onClick={onIncreaseProductQuantity}>
              &gt;
            </ButtonQuantity>
          </ProductQuantityControl>
          <div>
            <strong> = {(productPrice * product.quantity).toLocaleString("de-DE")}</strong>
          </div>
        </ProductInfo>
      </ProductContent>
      <DeleteProduct onClick={onRemoveProduct}>
        <BsTrash />
      </DeleteProduct>
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
