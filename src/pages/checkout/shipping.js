import React, { useEffect, useState, useRef,  createRef } from "react"
import Layout from "../../containers/Layout"
import { connect } from "react-redux"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import UserInformationForm from "../../components/Checkout/UserInformationForm"
import { navigate } from "gatsby"
import { useLocation } from "@reach/router"
import {
  ContentContainer,
  FormContainer,
} from "../../styles/checkout.shipping.styles"
import { useTheme } from "../../theme"
import { updateUserInformation } from "../../redux/user/user.actions"
import UserInformationShipping from "../../components/Checkout/UserInformationShipping"
const Shipping = ({ user, updateUserInformation }) => {
  const [updateInfo, setUpdateInfo] = useState(false);
  const { pathname } = useLocation()
  const { theme } = useTheme()
  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { from: pathname } })
    }
  }, [user])
  const userInfoRef = useRef(null);
  
  useEffect(() => {
    if(!updateInfo){
      window.scrollTo({
        top : userInfoRef?.current?.offsetTop - 160 || 160, 
        behavior : "smooth"
      })
    }
  }, [updateInfo, userInfoRef])
  return (
    <Layout>
      <ContentContainer ref={userInfoRef}>
        {user.information && (
          <>
            <UserInformationShipping
              user={user}
              setUpdateInfo={setUpdateInfo}
            />
            {updateInfo && (
              <FormContainer theme={theme}>
                <UserInformationForm
                  user={user}
                  updateUserInformation={updateUserInformation}
                  setUpdateInfo={setUpdateInfo}
                  isUpdate                  
                />
              </FormContainer>
            )}
          </>
        )}
        {!user.information && (
          <FormContainer theme={theme}>
            <UserInformationForm
              user={user}
              updateUserInformation={updateUserInformation}              
            />
          </FormContainer>
        )}
      </ContentContainer>
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  updateUserInformation: information =>
    dispatch(updateUserInformation(information)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shipping)
