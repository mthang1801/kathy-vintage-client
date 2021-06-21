import React from "react"
import { Highlight } from "react-instantsearch-dom"
import { Link } from "gatsby"
import { useLanguage } from "../../locales"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
const Hit = ({ ...props }) => {
  const { lang } = useLanguage()
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
    </Link>
  )
}

export default Hit
