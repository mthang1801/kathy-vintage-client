import React, { useState } from "react"
import { Title } from "./styles/ProductDescription.styles"
import { validateYouTubeUrl, checkImageUrl } from "../../utils/checkUrl"
import ReactPlayer from "react-player"
import { useTheme } from "../../theme"
import useLanguage from "../Global/useLanguage"
import Markdown from "markdown-to-jsx"
import PostImageItem from "./PostImageItem"
import {
  MarkdownContainer,
  BlurSection,
  ReadMore,
  ReadMoreLink,
} from "./styles/ProductDescription.styles"

const ProductDescription = ({ product }) => {
  const { i18n, lang } = useLanguage()
  const { theme } = useTheme()
  const { productPage } = i18n.store.data[lang].translation.product
  const description =
    lang === "en"
      ? product.description_en.description_en
      : product.description_vi.description_vi
  const [isReadMore, setIsReadMore] = useState(false)
  const HeadingsMainOfPost = ({ children, ...props }) => {
    return <h2 {...props}>{children}</h2>
  }
  const HeadingsSubsetOfPost = ({ children, ...props }) => {
    return <h3 {...props}>{children}</h3>
  }

  const AnchorOfPost = ({ children, ...props }) => {
    const { href: uri } = props
    if (validateYouTubeUrl(uri)) {
      return (
        <ReactPlayer
          url={uri}
          controls
          width={typeof window !== "undefined" && window.innerWidth < 600 ? "100%" : "650px"}
          height={typeof window !== "undefined" && window.innerWidth < 600 ? "300px" : "450px"}
        />
      )
    }
    if (checkImageUrl(uri)) {
      return <PostImageItem src={uri} title={uri} />
    }
    return (
      <a
        {...props}
        target="_blank"
        rel="noreferrer"
        className="post-link"
        style={{ wordBreak: "break-word" }}
      >
        {children}
      </a>
    )
  }
  const ImageOfPost = ({ children, ...props }) => {
    const staticVideoPattern = /(watch|videos|video)+/
    if (staticVideoPattern.test(props.src)) {
      return <ReactPlayer src={`https:${props.src}`} />
    }
    return <PostImageItem src={props.src} title={props.title} />
  }
  const options = {
    overrides: {
      h2: {
        component: HeadingsMainOfPost,
      },
      h3: {
        component: HeadingsSubsetOfPost,
      },
      a: {
        component: AnchorOfPost,
      },
      img: {
        component: ImageOfPost,
      },
    },
  }

  return (
    <>
      <Title>{productPage.description}</Title>
      {description && (<><MarkdownContainer readMore={isReadMore}>
        {!isReadMore && <BlurSection theme={theme} />}
        <Markdown options={options}>{description}</Markdown>
      </MarkdownContainer>
        <ReadMore>
          <ReadMoreLink onClick={() => setIsReadMore(prevState => !prevState)} theme={theme}>
            {isReadMore ? productPage.shortenText : productPage.readMore}
          </ReadMoreLink>
        </ReadMore></>)}

    </>
  )
}

export default ProductDescription
