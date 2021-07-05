import React from "react"
import {
  Wrapper,
  AvatarContainer,
  ProductContent,
  ProductName,
  ProductInfo,
  PruductDetail,
  DeleteProduct,
} from "./styles/CartItem.styles"
import { useLanguage } from "../../locales"
import { useTheme } from "../../theme"
import { connect } from "react-redux"
import { removeProductFromCart } from "../../redux/cart/cart.actions"
import { BsTrash } from "react-icons/bs"

const CartItem = ({ product, removeProductFromCart }) => {
  const {
    translation: { cart },
    lang,
  } = useLanguage()
  const { theme } = useTheme()
  const productPrice =
    product.isDiscount && product.discountPercentage
      ? (product.unitPrice * (100 - +product.discountPercentage)) / 100
      : product.unitPrice
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
      <PruductDetail>
        <ProductContent>
          <ProductName>{product[`name_${lang}`]}</ProductName>
          <DeleteProduct onClick={onRemoveProduct}>
            <BsTrash />
          </DeleteProduct>
        </ProductContent>
        <ProductInfo>
          <div>
            {cart.quantity}: <strong>{product.quantity}</strong>
          </div>

          <div>
            {cart.totalPrice}:{" "}
            <strong>
              {(productPrice * product.quantity).toLocaleString("de-DE")}
            </strong>
          </div>
        </ProductInfo>
      </PruductDetail>
    </Wrapper>
  )
}

const mapDispatchToProps = dispatch => ({
  removeProductFromCart: product => dispatch(removeProductFromCart(product)),
})

export default connect(null, mapDispatchToProps)(CartItem)
