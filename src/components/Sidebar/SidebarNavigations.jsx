import React from "react"
import { Wrapper, Title } from "./styles/Sidebar.styles"
import { Link } from "gatsby"
const SidebarNavigations = ({ navigations, slugParent, lang, title }) => {
  if(!navigations.length) return null ; 
  return (
    <Wrapper>
      <Title>{title}</Title>
      {navigations.map(navigationItem => (
        <Link
          key={`${navigationItem.contentful_id}`}
          to={`${slugParent}/${navigationItem.slug}`}
        >
          {navigationItem[`name_${lang}`]}
        </Link>
      ))}
    </Wrapper>
  )
}

export default SidebarNavigations
