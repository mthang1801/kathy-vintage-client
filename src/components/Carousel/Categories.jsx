import React, { useState, useRef, useEffect, useContext } from "react"
import {
  CategoriesSliderContainer,
  Caption,
  CategoryItem,
  ImageContainer,
} from "./styles/Categories.styles"
import Slider from "react-slick"
import useLanguage from "../Global/useLanguage"
import {
  CustomPortfoliosArrowNext,
  CustomPortfoliosArrowPrev,
} from "./CustomArrowSlider"
import { useStaticQuery, graphql, navigate } from "gatsby"
import Image from "gatsby-image"
import {useTheme} from "../../theme"
let dragging = false
const CategoriesSlider = () => {
  const { i18n, lang } = useLanguage()
  const { categoryCarouselTitle } = i18n.store.data[lang].translation.page.home
  const [slide, setSlide] = useState(null)
  const { fetchAllCategories } = useStaticQuery(CATEGORIES_QUERY)
  // const { theme, colorMode } = useThemeUI()
  const categories = fetchAllCategories.edges.map(({ node }) => node)
  const {theme} = useTheme()
  console.log(theme)
  const slideRef = useRef(null)
  useEffect(() => {
    setSlide(slideRef.current)
  }, [slideRef])
  const settings = {
    infinite: true,    
    autoPlay: true,
    slidesToShow: window.innerWidth < 600 ? 3 : window.innerWidth < 992 ? 4 : 3,
    speed: 500,
    slidesPerRow: 1,
    slidesToScroll: 1,    
    rows: 2,       
    prevArrow: <CustomPortfoliosArrowPrev />,
    nextArrow: <CustomPortfoliosArrowNext />,
    swipeToSlide: true,
    focusOnSelect: false,
    pauseOnHover : true,
    autoPlaySpeed: 2000,
    beforeChange: () => (dragging = true),
    afterChange: () => (dragging = false),
  }
  const onClickCategoryItem = category => {
    if(!dragging){
      navigate(`/${category.portfolio.slug}/${category.slug}`);
    }
  }
  return (
    <CategoriesSliderContainer>
      {/* <Caption>{categoryCarouselTitle}</Caption>    
        <Slider {...settings}>
          {categories.map( (category,idx) => (
            <CategoryItem              
              onClick={() => onClickCategoryItem(category)}
              key={category.contentful_id}              
              theme={theme.modes[colorMode]}                  
            >
              <ImageContainer>
                <Image
                  fluid={category.image.fluid}
                  alt={category.image.title}
                />
              </ImageContainer>
              <span>{lang === "en" ? category.nameEn : category.nameVi}</span>
            </CategoryItem>
          ))}
        </Slider>
       */}
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
