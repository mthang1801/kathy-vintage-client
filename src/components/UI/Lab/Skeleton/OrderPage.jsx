import React from "react"
import Skeleton from "@material-ui/lab/Skeleton"
import { Wrapper } from "./styles/OrderPage.styles"
export default function OrderPageSkeleton() {
  return <Wrapper>
    {Array.from({length : 7}).map((_, idx) => (
      <Skeleton variant="text" animation="wave"/>
    ))}
    
  </Wrapper>
}
