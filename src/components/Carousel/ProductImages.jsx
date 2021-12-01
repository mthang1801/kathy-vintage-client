import React from 'react';
import Slider from 'react-slick';
import Image from 'gatsby-image';
import { Wrapper, ImageContainer } from './styles/ProductImages.styles';
import { v4 as uuidv4 } from 'uuid';
const ProductImages = ({ images, setActiveImage, activeImage }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(4, images.length),
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  const onSetActiveImage = (idx) => {
    if (typeof window !== 'undefined') {
      window.scroll({
        top: 60,
        behavior: 'auto',
      });
    }

    setActiveImage(idx);
  };
  return (
    <Wrapper>
      <Slider {...settings}>
        {images.map((image, idx) => (
          <ImageContainer key={uuidv4()} active={activeImage === idx}>
            <img
              src={`https:${image.file.url}`}
              onClick={() => onSetActiveImage(idx)}
            />
          </ImageContainer>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default ProductImages;
