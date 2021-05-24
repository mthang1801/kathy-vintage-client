import React, { useState } from "react"
import { Wrapper, Title, InputGroup, Input } from "./styles/Sidebar.styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import {useTheme} from "../../theme"
import Button from "@material-ui/core/Button"
const SidebarFilterPrices = ({
  minPrice,
  maxPrice,
  templateTranslation,
}) => {
  const {theme} = useTheme();
  const priceDiff = maxPrice - minPrice
  const pricesQuantiles = [
    minPrice,
    0.25 * priceDiff + minPrice,
    0.5 * priceDiff + minPrice,
    0.75 * priceDiff + minPrice,
    maxPrice,
  ]
  const {title, from, to, buttonFilter} = templateTranslation.sidebar.prices
  const [selectedIdx, setSelectedIdx] = useState(1)
  return (
    <Wrapper>
      <Title>{title}</Title>
      {Array.from({ length: pricesQuantiles.length - 1 }).map((_, idx) => (
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={idx === selectedIdx}
              onChange={() => setSelectedIdx(idx)}
              name={templateTranslation?.sidebar?.prices?.range(
                pricesQuantiles[idx],
                pricesQuantiles[idx + 1]
              )}
            />
          }
          label={templateTranslation?.sidebar?.prices?.range(
            pricesQuantiles[idx],
            pricesQuantiles[idx + 1]
          )}
        />
      ))}
      <InputGroup>
        <div><span>{from}</span> <Input theme={theme}/></div>
        <div><span>{to}</span> <Input theme={theme}/></div>
        <Button color="primary" variant="contained" size="small">{buttonFilter}</Button>
      </InputGroup>
    </Wrapper>
  )
}

export default SidebarFilterPrices
