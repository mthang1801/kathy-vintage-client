import React, { useState } from "react"
import { Wrapper, Title, ReadMoreText,BlurSection } from "./styles/Sidebar.styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import {useTheme} from "../../theme"
const SidebarManufactors = ({ templateTranslation, manufactors }) => {
  const { title } = templateTranslation?.sidebar?.manufactors
  const {theme} = useTheme();
  const MANUFACTORS_LIMIT = 15
  const [manufactorsShorten, setManufactorsShorten] = useState(
    manufactors.distinct
      .filter((_, idx) => idx < MANUFACTORS_LIMIT)
      .map(manufactor => manufactor)
  )
  const readMoreManufactors = () => {
    setManufactorsShorten(prevManufactors => [...prevManufactors, ...manufactors.distinct.filter((_,idx) => idx >= prevManufactors.length && idx < prevManufactors.length + MANUFACTORS_LIMIT).map(manufactor => manufactor)])
  }
  return (
    <Wrapper>
      <Title>{title}</Title>
      {manufactorsShorten.map(manufactor => (
        <FormControlLabel
          control={<Checkbox color="primary" />}
          label={manufactor}
        />
      ))}
      {manufactorsShorten.length < manufactors.distinct.length && (
        <>
        <BlurSection theme={theme}/>
        <ReadMoreText onClick={readMoreManufactors}>Read More</ReadMoreText>
        </>
      )}
    </Wrapper>
  )
}

export default SidebarManufactors
