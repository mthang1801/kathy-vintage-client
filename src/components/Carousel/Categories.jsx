import React, { useState, useRef, useEffect, useContext } from "react"
import {
  CategoriesSliderContainer,
  Title,
  CategoryItem,
  ImageContainer,
  CategoryItemText,
} from "./styles/Categories.styles"
import Slider from "react-slick"
import { useLanguage } from "../../locales"
import {
  CustomPortfoliosArrowNext,
  CustomPortfoliosArrowPrev,
} from "./CustomArrowSlider"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Image from "gatsby-image"
import { useTheme } from "../../theme"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
let dragging = false
const CategoriesSlider = () => {
  const {
    translation: {
      page: {
        home: { categoryCarouselTitle },
      },
    },
    lang,
  } = useLanguage()

  const { fetchAllCategories } = useStaticQuery(CATEGORIES_QUERY)
  // const { theme, colorMode } = useThemeUI()
  const categories = fetchAllCategories.edges.map(({ node }) => node)
  const { theme } = useTheme()

  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: 6,
    speed: 500,
    slidesPerRow: 1,
    slidesToScroll: 1,
    rows: 2,
    prevArrow: <CustomPortfoliosArrowPrev />,
    nextArrow: <CustomPortfoliosArrowNext />,
    swipeToSlide: true,
    focusOnSelect: false,
    pauseOnHover: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
    beforeChange: () => (dragging = true),
    afterChange: () => (dragging = false),
  }
  const onClickCategoryItem = category => {
    trackCustomEvent({
      action: "Click",
      category: "category",
      label: "Click Category item",
    })
    if (!dragging) {
      navigate(`/${category.portfolio.slug}/${category.slug}`)
    }
  }
  return (
    <CategoriesSliderContainer theme={theme}>
      <Title>{categoryCarouselTitle}</Title>
      <Slider {...settings}>
        {categories.map((category, idx) => (
          <CategoryItem
            onClick={() => onClickCategoryItem(category)}
            key={category.contentful_id}
            theme={theme}
          >
            <ImageContainer>
              <Image fluid={category.image.fluid} alt={category.image.title} />
            </ImageContainer>
            <CategoryItemText title={category[`name_${lang}`]}>
              {category[`name_${lang}`]}
            </CategoryItemText>
          </CategoryItem>
        ))}
      </Slider>
    </CategoriesSliderContainer>
  )
}

const CATEGORIES_QUERY = graphql`
  query {
    fetchAllCategories: allContentfulCategory {
      edges {
        node {
          contentful_id
          name_vi
          name_en
          slug
          portfolio {
            contentful_id
            slug
          }
          image {
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default CategoriesSlider
