import React, { useState } from 'react';
import {
  Wrapper,
  ImageContainer,
  ProductText,
  ProductName,
  ProductPrice,
  DiscountBrand,
  ImageMobileTablet,
} from './styles/ProductItem.styles';
import _ from 'lodash';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLanguage } from '../../locales';
import { useTheme } from '../../theme';
import { getDeviceType } from '../../utils/getDeviceType';
const ProductItem = ({ product }) => {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const productPrice =
    +product?.discountPercentage > 0 &&
    +product?.discountPercentage < 100 &&
    product.isDiscount
      ? (product.unitPrice * (100 - parseFloat(product.discountPercentage))) /
        100
      : product.unitPrice;

  const productName =
    product[`name_${lang}`].length > 60
      ? product[`name_${lang}`].slice(0, 60) + '...'
      : product[`name_${lang}`];

  const path =
    product?.portfolio?.slug &&
    product?.category?.slug &&
    product?.productGroup?.slug
      ? `/${product.portfolio.slug}/${product.category.slug}/${product.productGroup.slug}/${product.slug}`
      : `/products/${product.slug}`;
  console.log(getDeviceType());
  return (
    <Wrapper theme={theme} to={path}>
      {product.isDiscount && product.discountPercentage && (
        <DiscountBrand>{-product.discountPercentage}%</DiscountBrand>
      )}
      {getDeviceType() === 'desktop' ? (
        <ImageContainer
          imageHover={`https:${
            product?.images[0]?.fixed?.src || product?.images[0]?.file?.url
          }`}
          imageMouseout={`https:${
            product?.images[1]?.fixed?.src || product?.images[1]?.file?.url
          }`}
        />
      ) : (
        <ImageMobileTablet>
          <LazyLoadImage
            src={`https:${
              product?.images[0]?.fixed?.src || product?.images[0]?.file?.url
            }`}
            effect="blur"
          />
        </ImageMobileTablet>
      )}

      <ProductText>
        <ProductName>{productName}</ProductName>
        <ProductPrice>
          {productPrice.toLocaleString('de-DE', {
            style: 'currency',
            currency: 'VND',
          })}
        </ProductPrice>
      </ProductText>
    </Wrapper>
  );
};

export default ProductItem;
