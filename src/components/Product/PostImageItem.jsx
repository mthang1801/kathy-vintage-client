import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { Wrapper } from './styles/PostImageItem.styles';
const PostImageItem = ({ src, title }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <img src={src} alt={title} onClick={() => setIsOpen(true)} />
      {isOpen && (
        <Lightbox mainSrc={src} onCloseRequest={() => setIsOpen(false)} />
      )}
    </Wrapper>
  );
};

export default PostImageItem;
