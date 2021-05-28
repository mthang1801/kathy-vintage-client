import React from "react"
import { Highlight } from "react-instantsearch-dom"
import styled from "styled-components"
import { Link } from "gatsby"
import useLanguage from "../Global/useLanguage"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
const Hit = ({ ...props }) => {
  const { lang } = useLanguage()
  
  console.log(props)
  return (
    <Link
      to={`/products/${props.hit.slug}`}      
      onClick={() => {
        trackCustomEvent({
          category: "router link",
          action: "Click",
          label: `/posts/${props.hit.slug}`,
        })
      }}
    >
      <h4 className="hit-title">
        <Highlight attribute={`name_${lang}`} hit={props.hit} />
      </h4>
      {/* <p className="hit-description">
        <Highlight attribute={lang === "en" ? "descriptionEn" : "descriptionVi"} hit={props.hit} />
      </p> */}
    </Link>
  )
}

export default Hit
