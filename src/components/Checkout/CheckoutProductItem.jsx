import React, { useState } from 'react';
import {
  Wrapper,
  ImageContainer,
  ProductInformationOverview,
  ProductContent,
  ProductPriceAndQuantity,
  ProductDelete,
  ProductPrice,
  ProductQuantityControls,
  ProductPriceAfterDiscount,
  ProductPriceOrigin,
  Grid,
  ProductColorItem,
} from './styles/CheckoutProductItem.styles';
import { useLanguage } from '../../locales';
import { useTheme } from '../../theme';
import { BsTrash } from 'react-icons/bs';
import QuantityControl from '../Controls/QuantityControl';
import AlertDialog from '../UI/FeedBacks/Dialog/AlertDialog';
import Button from '@material-ui/core/Button';

const CheckoutProductItem = ({
  product,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
  changeProductInfo,
}) => {
  const {
    translation: { dialog },
    lang,
  } = useLanguage();
  const { theme } = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const productPrice =
    product.isDiscount && product.discountPercentage
      ? (product.unitPrice * (100 - +product.discountPercentage)) / 100
      : product.unitPrice;

  const onClickRemoveProductFromCart = () => {
    setOpenDialog(true);
  };
  const onChangeColor = (color) => {
    const cloneProduct = { ...product };
    cloneProduct.selectedColor = color;
    changeProductInfo(cloneProduct);
  };
  const onChangeSize = (size) => {
    const cloneProduct = { ...product };
    cloneProduct.selectedSize = size;
    changeProductInfo(cloneProduct);
  };
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
          <ProductContent>
            <div>{product[`name_${lang}`]}</div>
            <Grid>
              {product.selectedColor &&
                product?.colors?.length &&
                product.colors.map(({ color, image }) => (
                  <ProductColorItem
                    theme={theme}
                    active={product.selectedColor === color}
                    onClick={() => onChangeColor(color)}
                  >
                    {color}
                  </ProductColorItem>
                ))}
            </Grid>
            <Grid>
              {product.selectedSize &&
                product?.sizes?.length &&
                product.sizes.map((size) => (
                  <Button
                    color="primary"
                    variant={
                      product.selectedSize === size ? 'contained' : 'outlined'
                    }
                    onClick={() => onChangeSize(size)}
                    size="small"
                  >
                    {size}
                  </Button>
                ))}
            </Grid>
          </ProductContent>
          <ProductPriceAndQuantity>
            <ProductPrice>
              <ProductPriceAfterDiscount>
                {productPrice.toLocaleString('de-DE')}
              </ProductPriceAfterDiscount>
              {product.isDiscount && product.discountPercentage && (
                <ProductPriceOrigin>
                  <span>{product.unitPrice.toLocaleString('de-DE')}</span>
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
  );
};

export default CheckoutProductItem;
