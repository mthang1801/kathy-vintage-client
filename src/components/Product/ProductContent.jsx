import React, { useState } from 'react';
import {
  Wrapper,
  Title,
  InitialPrice,
  OfficialPrice,
  DiscountPercentage,
  Flex,
  Grid,
  CustomButton,
  ProductColorItem,
  ButtonGroup,
} from './styles/ProductContent.styles';
import Button from '@material-ui/core/Button';
import { useLanguage } from '../../locales';
import QuantityControl from '../Controls/QuantityControl';
import { useTheme } from '../../theme';
import {
  addProductItemToCart,
  removeAlertCart,
} from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { navigate } from 'gatsby';
const ProductContent = ({
  product,
  addProductItemToCart,
  cartItems,
  removeAlertCart,
}) => {
  const {
    name_vi,
    name_en,
    unitPrice,
    origin,
    manufactor,
    sizes,
    isDiscount,
    discountPercentage,
    colors,
  } = product;
  const { theme } = useTheme();
  const {
    translation: {
      product: { productPage },
    },
    lang,
  } = useLanguage();
  const [selectedSize, setSelectedSize] = useState(
    sizes?.length ? sizes[0] : null
  );
  const [selectedColor, setSelectedColor] = useState(
    colors?.length ? colors[0].color : null
  );
  const [productQuantity, setProductQuantity] = useState(
    cartItems.find((item) => item.contentful_id === product.contentful_id)
      ?.quantity || 1
  );
  const productPrice =
    isDiscount && discountPercentage
      ? (unitPrice * (100 - parseFloat(discountPercentage))) / 100
      : unitPrice;
  const onChangeColor = (color) => {
    setSelectedColor(color);
  };

  const onAddProductItemToCart = () => {
    const cloneProduct = { ...product };
    if (selectedColor) {
      cloneProduct.selectedColor = selectedColor;
    }
    if (selectedSize) {
      cloneProduct.selectedSize = selectedSize;
    }
    cloneProduct.quantity = Math.max(1, productQuantity);
    addProductItemToCart(cloneProduct);
  };

  const onClickPurchase = () => {
    onAddProductItemToCart();
    removeAlertCart();
    navigate('/checkout');
  };

  return (
    <Wrapper theme={theme}>
      <Title>{lang === 'en' ? name_en : name_vi}</Title>
      <div>
        {manufactor && (
          <span>
            {productPage.manufactor} : <strong>{manufactor}</strong>
          </span>
        )}
        {origin && (
          <span style={{ marginLeft: '2rem' }}>
            {productPage.origin} : <strong>{origin}</strong>
          </span>
        )}
      </div>
      {/* Price component */}
      <Flex spacing={0.5} theme={theme} style={{ padding: '1rem' }}>
        <OfficialPrice>
          {productPrice.toLocaleString('de-DE', {
            style: 'currency',
            currency: 'VND',
          })}
        </OfficialPrice>
        {isDiscount && discountPercentage && (
          <>
            <InitialPrice>
              {unitPrice.toLocaleString('de-DE', {
                style: 'currency',
                currency: 'VND',
              })}
            </InitialPrice>
            <DiscountPercentage>{-discountPercentage}%</DiscountPercentage>
          </>
        )}
      </Flex>
      {/* Colors product */}
      {colors?.length ? (
        <>
          <Flex>
            <span>{productPage.colors}:</span>
          </Flex>
          <Grid>
            {colors.map(({ color, image }) => (
              <ProductColorItem
                theme={theme}
                active={selectedColor === color}
                onClick={() => onChangeColor(color)}
              >
                {image && <img src={image} alt={color} />}
                <span>{color}</span>
              </ProductColorItem>
            ))}
          </Grid>
        </>
      ) : null}
      {/* Sizes product */}
      <Flex spacing={0.5}>
        <span>{productPage.size}: </span>
        <span>
          <strong>{selectedSize}</strong>
        </span>
      </Flex>
      <Grid>
        {sizes.map((size) => (
          <Button
            color="primary"
            variant={selectedSize === size ? 'contained' : 'outlined'}
            onClick={() => setSelectedSize(size)}
            size="small"
          >
            {size}
          </Button>
        ))}
      </Grid>
      {/* Quantity Control*/}
      <Flex>
        <span>{productPage.quantity}:</span>
      </Flex>
      <QuantityControl
        quantity={productQuantity}
        setQuantity={setProductQuantity}
      />
      <ButtonGroup>
        <CustomButton
          color="primary"
          variant="contained"
          size="large"
          onClick={onAddProductItemToCart}
        >
          <span>{productPage.buttonAddToCart.icon}</span>
          <span>{productPage.buttonAddToCart.name}</span>
        </CustomButton>
        <CustomButton
          color="secondary"
          variant="contained"
          size="large"
          onClick={onClickPurchase}
        >
          <span>{productPage.buttonPurchase.icon}</span>
          <span>{productPage.buttonPurchase.name}</span>
        </CustomButton>
      </ButtonGroup>
    </Wrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  addProductItemToCart: (product) => dispatch(addProductItemToCart(product)),
  removeAlertCart: () => dispatch(removeAlertCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductContent);
