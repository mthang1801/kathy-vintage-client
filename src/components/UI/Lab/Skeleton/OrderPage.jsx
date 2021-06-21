import React from "react"
import { Wrapper } from "./styles/GeneralInformation.styles"
import Skeleton from "@material-ui/lab/Skeleton"
const UserDashBoard = ({ fullScreen }) => {
  return (
    <Wrapper fullScreen>
      {Array.from({ length: 8 }).map((_, idx) => (
        <Skeleton variant="text" animation="wave" />
      ))}
    </Wrapper>
  )
}

export default UserDashBoard
