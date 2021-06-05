import React from "react"
import {
  Wrapper,
  ImageContainer,
  Title,
  Button,
} from "./styles/EmptyOrder.styles"

import { useLanguage } from "../../locales"
import { ImFileEmpty } from "react-icons/im"
import { useTheme } from "../../theme"
import { navigate } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
const EmptyOrder = () => {
  const {
    translation: { orders }
  } = useLanguage()

  const { theme } = useTheme()
  return (
    <Wrapper theme={theme}>
      <ImageContainer>
        <ImFileEmpty />
      </ImageContainer>

      <Title>{orders.emptyOrder}</Title>
      <Button
        onClick={() => {
          trackCustomEvent({
            action: "Click",
            category: "navigate",
            label: "To Back home",
          })
          navigate("/")
        }}
      >
        {orders.buttonBackHome}
      </Button>
    </Wrapper>
  )
}

export default EmptyOrder
