import React, { useState } from "react"
import {
  Wrapper,
  ImageContainer,
  ProductInformationOverview,
  ProductName,
  ProductPriceAndQuantity,
  ProductDelete,
  ProductPrice,
  ProductQuantityControls,
  ProductPriceAfterDiscount,
  ProductPriceOrigin,
} from "./styles/CheckoutProductItem.styles"
import useLanguage from "../Global/useLanguage"
import { useTheme } from "../../theme"
import { BsTrash } from "react-icons/bs"
import QuantityControl from "../Controls/QuantityControl"
import AlertDialog from "../UI/FeedBacks/Dialog/AlertDialog"
const CheckoutProductItem = ({
  product,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,  
}) => {
  const { i18n, lang } = useLanguage()
  const { dialog } = i18n.store.data[lang].translation;
  const { theme } = useTheme()
  const [ openDialog, setOpenDialog ] = useState(false)
  const productPrice =
    product.isDiscount && product.discountPercentage
      ? (product.unitPrice * (100 - +product.discountPercentage)) / 100
      : product.unitPrice

  const onClickRemoveProductFromCart = () => {
    setOpenDialog(true);
  }
  return (
    <>
      <Wrapper theme={theme}>
        <ImageContainer>
          <img
            src={`https:${product.images[0].file.url}`}
            alt={product[`name_${lang}`]}
          />
        </ImageContainer>
        <ProductInformationOverview>
          <ProductName>{product[`name_${lang}`]}</ProductName>
          <ProductPriceAndQuantity>
            <ProductPrice>
              <ProductPriceAfterDiscount>
                {productPrice.toLocaleString("de-DE")}
              </ProductPriceAfterDiscount>
              {product.isDiscount && product.discountPercentage && (
                <ProductPriceOrigin>
                  <span>{product.unitPrice.toLocaleString("de-DE")}</span>
                  <span>{-product.discountPercentage}%</span>
                </ProductPriceOrigin>
              )}
            </ProductPrice>
            <ProductQuantityControls>
              <QuantityControl
                quantity={product.quantity}
                product={product}
                increaseProductQuantity={increaseProductQuantity}
                decreaseProductQuantity={decreaseProductQuantity}
              />
            </ProductQuantityControls>
          </ProductPriceAndQuantity>
        </ProductInformationOverview>
        <ProductDelete onClick={onClickRemoveProductFromCart}>
          <BsTrash />
        </ProductDelete>
      </Wrapper>
      <AlertDialog
        open={openDialog}
        setOpen={setOpenDialog}
        title={dialog.removeProductFromCart.title}
        content={dialog.removeProductFromCart.content(product[`name_${lang}`])}
        onAgree={() => removeProductFromCart(product)}
      />
    </>
  )
}

export default CheckoutProductItem
