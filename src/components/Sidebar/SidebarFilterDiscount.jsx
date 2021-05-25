import React from "react"
import { Wrapper, Title } from "./styles/Sidebar.styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

const SidebarFilterDiscount = ({ templateTranslation }) => {
  const { fields, title } = templateTranslation?.sidebar?.discount  
  return (
    <Wrapper>
      <Title>{title}</Title>

      {fields.map(field => (
        <FormControlLabel
          key={field.key}
          control={<Checkbox color="primary" />}
          label={field.value}
        />
      ))}
    </Wrapper>
  )
}

export default SidebarFilterDiscount
