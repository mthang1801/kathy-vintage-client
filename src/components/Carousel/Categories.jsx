import React, { useState, useRef, useEffect, useContext } from "react"
import {
  CategoriesSliderContainer,
  Title,
  CategoryItem,
  ImageContainer,
  CategoryItemText,
} from "./styles/Categories.styles"
import Slider from "react-slick"
import useLanguage from "../Global/useLanguage"
import {
  CustomPortfoliosArrowNext,
  CustomPortfoliosArrowPrev,
} from "./CustomArrowSlider"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Image from "gatsby-image"
import { useTheme } from "../../theme"
let dragging = false
const CategoriesSlider = () => {
  const { i18n, lang } = useLanguage()
  const { categoryCarouselTitle } = i18n.store.data[lang].translation.page.home
  const [slide, setSlide] = useState(null)
  const { fetchAllCategories } = useStaticQuery(CATEGORIES_QUERY)
  // const { theme, colorMode } = useThemeUI()
  const categories = fetchAllCategories.edges.map(({ node }) => node)
  const { theme } = useTheme()
  const slideRef = useRef(null)
  useEffect(() => {
    setSlide(slideRef.current)
  }, [slideRef])
  const settings = {
    infinite: true,
    autoplay: true,
    slidesToShow: window.innerWidth < 600 ? 3 : window.innerWidth < 992 ? 4 : 6,
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
    beforeChange: () => (dragging = true),
    afterChange: () => (dragging = false),
  }
  const onClickCategoryItem = category => {
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
            <CategoryItemText
              title={lang === "en" ? category.nameEn : category.nameVi}
            >
              {lang === "en" ? category.nameEn : category.nameVi}
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
          nameVi
          nameEn
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
