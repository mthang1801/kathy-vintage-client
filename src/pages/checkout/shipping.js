import React, { useEffect, useState, useRef } from "react"
import Layout from "../../containers/Layout"
import { connect } from "react-redux"
import {
  selectCurrentUser,
  selectUserFetched,
} from "../../redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import UserInformationForm from "../../components/Checkout/UserInformationForm"
import { navigate } from "gatsby"
import { useLocation, useMatch } from "@reach/router"
import {
  ContentContainer,
  FormContainer,
} from "../../styles/checkout.shipping.styles"
import { useTheme } from "../../theme"
import { updateUserInformation } from "../../redux/user/user.actions"
import UserInformationShipping from "../../components/Checkout/UserInformation.Shipping"
const Shipping = ({ user, updateUserInformation, userFetched }) => {
  const { pathname, state } = useLocation()

  const [updateInfo, setUpdateInfo] = useState(
    state?.from === "/checkout/payment"
  )
  const { theme } = useTheme()

  useEffect(() => {
    if (!user && userFetched) {
      navigate("/auth", { state: { from: pathname } })
    }
  }, [user, userFetched])
  const userInfoRef = useRef(null)
  return (
    <Layout>
      {user && (
        <ContentContainer ref={userInfoRef}>
          {user?.information && (
            <>
              <UserInformationShipping
                user={user}
                setUpdateInfo={setUpdateInfo}
                openUpdateForm={updateInfo}
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
          {!user?.information && (
            <FormContainer theme={theme}>
              <UserInformationForm
                user={user}
                updateUserInformation={updateUserInformation}
              />
            </FormContainer>
          )}
        </ContentContainer>
      )}
    </Layout>
  )
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  userFetched: selectUserFetched,
})

const mapDispatchToProps = dispatch => ({
  updateUserInformation: information =>
    dispatch(updateUserInformation(information)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Shipping)
