import React, { useEffect } from "react"
import Layout from "../../containers/Layout"
import SignUpForm from "../../components/Auth/SignUpForm"
import {
  selectCurrentUser,
  selectUserFetched,
} from "../../redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"
import { navigate } from "gatsby"
const Signup = ({ user, isFetched, ...props }) => {
  useEffect(() => {
    if (user) {
      navigate(props?.location?.state?.from || "/")
    }
  }, [user])
  return <Layout>{!user && isFetched && <SignUpForm />}</Layout>
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  isFetched: selectUserFetched,
})

export default connect(mapStateToProps)(Signup)
