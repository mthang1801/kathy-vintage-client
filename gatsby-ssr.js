import React from "react"
import { wrapRootElement as wrapper } from "./gatsby-root-wrapper"
import { Helmet } from "react-helmet"
export const onRenderBody = ({
  setPreBodyComponents,
  setPostBodyComponents,
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const helmet = Helmet.renderStatic()
  setPreBodyComponents([
    <div id="preloader">     
      <img
        src="/images/logo.jpg"
        alt="logo"
        style={{ width : "4rem", height : "4rem", borderRadius:"50%"}}
      />
      <div className="preloader_animation"></div>
    </div>,
  ])
  setHtmlAttributes(helmet.htmlAttributes.toComponent())
  setBodyAttributes(helmet.bodyAttributes.toComponent())
  setBodyAttributes({
    className: "preloader_active",
  })
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.base.toComponent(),
    helmet.meta.toComponent(),
    helmet.link.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
    <link as="script" rel="preload" href="/scripts/preloader.js" />,
    <noscript>
      <link rel="stylesheet" href="/styles/noscript.css" />
    </noscript>,
  ])
  setPostBodyComponents([<script src="/scripts/preloader.js" />])
}

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  const headComponents = getHeadComponents()
  const order = ["title", "base", "meta", "link", "noscript", "script", "style"]

  const sortedHeadComponents = headComponents
    .slice(0)
    .flat()
    .sort((x, y) => {
      return order.indexOf(x.type) - order.indexOf(y.type)
    })
  replaceHeadComponents(sortedHeadComponents)
}

export const wrapRootElement = wrapper
