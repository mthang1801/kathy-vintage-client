import React, { useState } from "react"
import { Wrapper, Title, ReadMoreText,BlurSection } from "./styles/Sidebar.styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
const SidebarFilterRecommend = ({ templateTranslation }) => {
  const { title , fields} = templateTranslation?.sidebar?.recommend  
  
  return (
    <Wrapper>
      <Title>{title}</Title>
      {Object.keys(fields).map(field => (
        <FormControlLabel
          key={fields[field].key}
          control={<Checkbox color="primary" />}
          label={fields[field].value}
        />
      ))}      
    </Wrapper>
  )
}

export default SidebarFilterRecommend
