import React from "react"
import Layout from "../containers/Layout"
import Banners from "../components/Carousel/Banners"
import Categories from "../components/Carousel/Categories"
export default function Home() {
  return (
    <Layout>
      <Banners />
      <Categories/>
    </Layout>
  )
}
