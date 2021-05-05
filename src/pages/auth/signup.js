import React,{useEffect} from 'react'
import Layout from "../../containers/Layout"
import SignUpForm from "../../components/Auth/SignUpForm"
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {createStructuredSelector} from "reselect"
import {connect} from "react-redux";
import {navigate} from "gatsby"
const Signup = ({user, ...props}) => {  
  
  useEffect(() => {
    if(user){
      navigate(props?.location?.state?.from || "/")
    }
  }, [user])
  return (
    <Layout>
      {!user && <SignUpForm/>}
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  user : selectCurrentUser
})

export default connect(mapStateToProps)(Signup)
