import React from 'react';
import Slider from 'react-slick';
import ProductItem from '../Product/ProductItem';
import { Wrapper, ProductContainer } from './styles/RelevantPosts.styles';
let dragging = false;

const RelevantProductsCarousel = ({ products }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'ease-out',
    arrows: false,
    beforeChange: () => (dragging = true),
    afterChange: () => (dragging = false),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {products.map((product) => (
          <ProductContainer key={product.contentful_id}>
            <ProductItem product={product} />
          </ProductContainer>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default RelevantProductsCarousel;
