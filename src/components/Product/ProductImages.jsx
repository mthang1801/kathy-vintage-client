import React, { useState } from 'react';
import {
  Wrapper,
  PresentImage,
  CarouselImages,
  ImageContainer,
} from './styles/ProductImages.styles';
import ProductImageMagnifier from './ProductImageMagnifier';
import ProductImagesCarousel from '../Carousel/ProductImages';
import { getDeviceType } from '../../utils/getDeviceType';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const ProductImages = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <Wrapper>
      <PresentImage>
        {getDeviceType() === 'desktop' ? (
          <ProductImageMagnifier
            image={`https:${images[activeImage].fixed.src}`}
            width={images[activeImage].fixed.width}
          />
        ) : (
          <ImageContainer>
            <LazyLoadImage
              src={`https:${images[activeImage].fixed.src}`}
              alt={`https:${images[activeImage].fixed.src}`}
              effect="blur"
            />
          </ImageContainer>
        )}
      </PresentImage>
      <CarouselImages>
        {images.length ? (
          <ProductImagesCarousel
            images={images}
            activeImage={activeImage}
            setActiveImage={setActiveImage}
          />
        ) : null}
      </CarouselImages>
    </Wrapper>
  );
};

export default ProductImages;
