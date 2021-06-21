import React from "react"
import { Wrapper, Title } from "./styles/Sidebar.styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import {
  useLayoutTempateActions,
  useLayoutTemplateStates,
} from "../../hooks/useLayoutTemplate"
const SidebarSorting = ({ templateTranslation }) => {
  const { sortingIndex } = useLayoutTemplateStates()
  const { setSortingIndex } = useLayoutTempateActions()
  const { fields, title } = templateTranslation?.sidebar?.sort
  const handleChangeSortingIndex = e => {
    setSortingIndex(+e.target.value)
  }
  return (
    <Wrapper>
      <Title>{title}</Title>

      {fields.map((field, idx) => (
        <FormControlLabel
          key={field.key}
          control={
            <Checkbox
              color="primary"
              value={idx}
              checked={sortingIndex === idx}
              onChange={handleChangeSortingIndex}
            />
          }
          label={field.value}
        />
      ))}
    </Wrapper>
  )
}

export default SidebarSorting
