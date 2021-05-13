import React, { useState } from "react"
import Layout from "../containers/Layout"
import BreadcrumbNavigation from "../components/BreadcrumbNavigation/BreadcrumbNavigation"
import {
  ProductOverviewContainer,
  ProductImages,
  PresentImage,
  CarouselImages,
  ProductInfo
} from "./styles/product.template.styles"
import { graphql } from "gatsby"
import ProductImageMagnifier from "../components/Product/ProductImageMagnifier"
import ProductImagesCarousel from "../components/Carousel/ProductImages"
import useLanguage from "../components/Global/useLanguage"

export const query = graphql`
  query($contentful_id: String) {
    product: contentfulProduct(contentful_id: { eq: $contentful_id }) {
      contentful_id
      slug
      name_vi
      name_en
      status
      slug
      quantity
      unitPrice
      isRecommended
      shippingFee
      origin
      manufactor
      size
      isDiscount
      discountPercentage

      images {
        file {
          url
          details {
            image {
              width
              height
            }
          }
        }
      }
      portfolio {
        name_en
        name_vi
        slug
      }
      category {
        name_en
        name_vi
        slug
      }
      productGroup {
        name_en
        name_vi
        slug
      }
      createdAt
      updatedAt
    }
  }
`

const ProductProduct = props => {
  const { product } = props.data
  const {
    contentful_id,
    slug,
    name_vi,
    name_en,
    status,
    quantity,
    unitPrice,
    isRecommended,
    shippingFee,
    origin,
    manufactor,
    size,
    isDiscount,
    discountPercentage,
    images,
    portfolio,
    category,
    productGroup,
    updatedAt,
  } = product  
  const [activeImage, setActiveImage] = useState(0)
  
  return (
    <Layout>
      <BreadcrumbNavigation
        contenfulData={[portfolio, category, productGroup, product]}
      />
      <ProductOverviewContainer>
        <ProductImages>
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
        </ProductImages>
        <ProductInfo>
          <h3></h3>
        </ProductInfo>
      </ProductOverviewContainer>
    </Layout>
  )
}

export default ProductProduct
