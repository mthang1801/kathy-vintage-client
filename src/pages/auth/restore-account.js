import React,{useEffect} from "react"
import Layout from "../../containers/Layout"
import RestoreAccountComponent from "../../components/Auth/RestoreAccount"
import {
  selectCurrentUser,
  selectUserFetched,
} from "../../redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import { navigate } from "gatsby"
const RestoreAccountPage = ({ user, isFetched, ...props }) => {
  useEffect(() => {
    if (user) {
      navigate(props?.location?.state?.from || "/")
    }
  }, [user, isFetched])
  return (
    <Layout>
      {!user &&isFetched && <RestoreAccountComponent />}
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  isFetched: selectUserFetched,
})

export default connect(mapStateToProps)(RestoreAccountPage)
