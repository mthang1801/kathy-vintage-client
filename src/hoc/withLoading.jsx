import React from "react"
import LoadingDialog from "../components/UI/FeedBacks/Dialog/LoadingDialog"
const WithLoading = WrappedComponent => {
  return ({ isLoading, ...otherProps }) => {
    return (
      <>
        <LoadingDialog open={isLoading} />
        <WrappedComponent {...otherProps} />
      </>
    )
  }
}

export default WithLoading
