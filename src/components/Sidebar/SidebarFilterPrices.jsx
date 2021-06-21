import React, { useState } from "react"
import { Wrapper, Title, InputGroup, Input } from "./styles/Sidebar.styles"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import { useTheme } from "../../theme"
import Button from "@material-ui/core/Button"
import {
  useLayoutTempateActions,
  useLayoutTemplateStates,
} from "../../hooks/useLayoutTemplate"
const SidebarFilterPrices = ({ minPrice, maxPrice, templateTranslation }) => {
  const [from, setFrom] = useState(null)
  const [to, setTo] = useState(null)
  const { setPriceIndex, setSelectedPriceScope } = useLayoutTempateActions()
  const { priceIndex } = useLayoutTemplateStates()
  const { theme } = useTheme()

  let pricesQuantiles = []
  const priceDiff = maxPrice - minPrice
  if (priceDiff === 0) {
    return null
  } else if (priceDiff < 1000000) {
    pricesQuantiles = [minPrice, 0.5 * priceDiff + minPrice, maxPrice]
  } else {
    pricesQuantiles = [
      minPrice,
      0.25 * priceDiff + minPrice,
      0.5 * priceDiff + minPrice,
      0.75 * priceDiff + minPrice,
      maxPrice,
    ]
  }

  const onHandleChangePrice = e => {
    const index = +e.target.value
    setPriceIndex(index)
    setSelectedPriceScope([pricesQuantiles[index], pricesQuantiles[index + 1]])
  }
  const onClickFilterPrice = () => {
    if (from && !to) {
      setSelectedPriceScope([from, Infinity])
    } else if (!from && to) {
      setSelectedPriceScope([-Infinity, to])
    } else if (!from && !to) {
      setSelectedPriceScope([-Infinity, Infinity])
    } else {
      setSelectedPriceScope([from, to])
    }
    setPriceIndex(-1)
  }
  const {
    title,
    from: fromTranslation,
    to: toTranslation,
    buttonFilter,
  } = templateTranslation.sidebar.prices
  return (
    <Wrapper>
      <Title>{title}</Title>
      {Array.from({ length: pricesQuantiles.length - 1 }).map((_, idx) => (
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              value={idx}
              checked={idx === priceIndex}
              onChange={onHandleChangePrice}
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
        <div>
          <span>{fromTranslation}</span>{" "}
          <Input
            type="number"
            theme={theme}
            onChange={e => setFrom(e.target.value)}
          />
        </div>
        <div>
          <span>{toTranslation}</span>{" "}
          <Input
            type="number"
            theme={theme}
            onChange={e => setTo(e.target.value)}
          />
        </div>
        <Button
          color="primary"
          variant="contained"
          size="small"
          onClick={onClickFilterPrice}
        >
          {buttonFilter}
        </Button>
      </InputGroup>
    </Wrapper>
  )
}

export default SidebarFilterPrices
