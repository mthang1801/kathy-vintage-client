import React, { useState } from "react"
import {
  Wrapper,
  Title,
  ReadMoreText,
  BlurSection,
} from "./styles/Sidebar.styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { useTheme } from "../../theme"
import {
  useLayoutTempateActions,
  useLayoutTemplateStates,
} from "../../hooks/useLayoutTemplate"
const SidebarManufactors = ({ templateTranslation, manufactors }) => {
  const { manufactor } = useLayoutTemplateStates()
  const { setManufactor } = useLayoutTempateActions()
  const { title, all } = templateTranslation?.sidebar?.manufactors
  const { theme } = useTheme()
  const MANUFACTORS_LIMIT = 15
  const shortenManufactor = [
    all.value,
    ...manufactors.distinct
      .filter((_, idx) => idx < MANUFACTORS_LIMIT)
      .map(manufactor => manufactor),
  ]
  const [_manufactors, _setManufactors] = useState(shortenManufactor)
  const readMoreManufactors = () => {
    _setManufactors(prevManufactors => [
      ...prevManufactors,
      ...manufactors.distinct
        .filter(
          (_, idx) =>
            idx >= prevManufactors.length &&
            idx < prevManufactors.length + MANUFACTORS_LIMIT
        )
        .map(manufactor => manufactor),
    ])
  }

  const onChangeManufactor = (index, value) => {
    if (index === 0) {
      return setManufactor({ index, value: "all" })
    }
    return setManufactor({ index, value })
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      {_manufactors.map((manufactorItem, idx) => (
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              value={manufactorItem}
              checked={idx === manufactor.index}
              onChange={() => onChangeManufactor(idx, manufactorItem)}
            />
          }
          label={manufactorItem}
        />
      ))}
      {_manufactors.length < manufactors.distinct.length && (
        <>
          <BlurSection theme={theme} />
          <ReadMoreText onClick={readMoreManufactors}>Read More</ReadMoreText>
        </>
      )}
    </Wrapper>
  )
}

export default SidebarManufactors
