import React, { useEffect, useState } from "react"
import Layout from "../../containers/Layout"
import { connect } from "react-redux"
import { selectCurrentUser } from "../../redux/user/user.selectors"
import { createStructuredSelector } from "reselect"
import UserInformationForm from "../../components/User/UserInformationForm"
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
  const [updateInfo, setUpdateInfo] = useState(false)
  const { pathname } = useLocation()
  const { theme } = useTheme()
  useEffect(() => {
    if (!user) {
      navigate("/auth", { state: { from: pathname } })
    }
  }, [user])

  return (
    <Layout>
      <ContentContainer>
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
