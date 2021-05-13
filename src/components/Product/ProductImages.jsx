import React, {useState} from "react"
import {Wrapper,PresentImage, CarouselImages } from "./styles/ProductImages.styles"
import ProductImageMagnifier from "./ProductImageMagnifier"
import ProductImagesCarousel from "../Carousel/ProductImages"
const ProductImages = ({images}) => {
  const [activeImage, setActiveImage] = useState(0)
  return (
    <Wrapper>
      <PresentImage>
        <ProductImageMagnifier
          image={`https:${images[activeImage].file.url}`}
          width={images[activeImage].file.details.image.width}
        />
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
  )
}

export default ProductImages
