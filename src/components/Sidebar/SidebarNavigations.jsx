import React from 'react'
import {Wrapper, Title} from "./styles/Sidebar.styles"
import {Link} from "gatsby"
const SidebarNavigations = ({data, slugParent, lang, title}) => {
  
  return (
    <Wrapper>
      <Title>{title}</Title>
      {data.map(dataItem => (
        <Link key={`${dataItem.contentful_id}`} to={`${slugParent}/${dataItem.slug}`}>{dataItem[`name_${lang}`]}</Link>
      ))}
    </Wrapper>
  )
}

export default SidebarNavigations
