import React, {useEffect} from 'react'
import Layout from "../../containers/Layout"
import SignInForm from "../../components/Auth/SignInForm"
import {connect} from "react-redux"
import {selectCurrentUser, selectUserFetched} from "../../redux/user/user.selectors"
import {createStructuredSelector} from "reselect"
import {navigate} from "gatsby"
const Login = ({user, isFetched,...props}) => {
  useEffect(()=>{
    if(user){
      navigate(props?.location?.state?.from || "/");
    }
  },[user])
  return (
    <Layout>
      {!user && isFetched && <SignInForm/>}
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  user : selectCurrentUser,
  isFetched : selectUserFetched
})

export default connect(mapStateToProps)(Login)
