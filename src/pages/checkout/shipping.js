import React, {useEffect} from 'react'
import Layout from "../../containers/Layout"
import {connect} from "react-redux";
import {selectCurrentUser} from "../../redux/user/user.selectors"
import {createStructuredSelector} from "reselect"
import UserInformationForm from "../../components/User/UserInformationForm"
import {navigate} from "gatsby"
import {useLocation} from "@reach/router"
import {ContentContainer,Form} from "../../styles/checkout.shipping.styles"
import {useTheme} from "../../theme"
const Shipping = ({user}) => {
  const {pathname} = useLocation();
  const {theme} = useTheme();
  useEffect(() => {
    if(!user){
      navigate("/auth", {state : {from : pathname}})
    }
  }, [user])
  
  return (
    <Layout>
      <ContentContainer>
      {!user?.information &&
        <Form theme={theme}>
          <UserInformationForm user={user}/>
        </Form>
      }
      </ContentContainer>
      
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  user : selectCurrentUser
})

export default connect(mapStateToProps)(Shipping)
