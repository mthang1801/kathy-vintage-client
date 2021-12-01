import React from 'react';
import { ImageContainer } from './styles/Footer.styles';
import { Link } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
const Brand = () => {
  return (
    <ImageContainer>
      <Link
        to="/"
        onClick={() => {
          trackCustomEvent({
            action: 'Click',
            category: 'navigate',
          });
        }}
      >
        <span>Kathy</span>
        <span>Vintage</span>
      </Link>
    </ImageContainer>
  );
};

export default Brand;
