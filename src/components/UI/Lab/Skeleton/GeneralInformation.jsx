import React from 'react'
import {Wrapper} from "./styles/GeneralInformation.styles"
import Skeleton from "@material-ui/lab/Skeleton"
const GeneralInformation = () => {
  return (
    <Wrapper>
      {Array.from({length : 8 }).map((_,idx) => (
         <Skeleton key={`general-information-skeleton-${idx}`} variant="text" animation="wave"/>
      ))}
    </Wrapper>
  )
}

export default GeneralInformation
