import React from "react"
import Layout from "../containers/Layout"
import Banners from "../components/Carousel/Banners"
import { BannerContainer, CarouselSide } from "../styles/index.styles"
export default function Home() {
  return (
    <Layout>
      <BannerContainer>
        <div></div>
        <CarouselSide>
          <Banners />
        </CarouselSide>
      </BannerContainer>
    </Layout>
  )
}
