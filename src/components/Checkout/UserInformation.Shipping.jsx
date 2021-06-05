import React from "react"
import {
  Wrapper,
  UserName,
  UserInfomationControls,
} from "./styles/UserInformation.Shipping.styles"
import { useLanguage } from "../../locales"
import { useTheme } from "../../theme"
import Button from "@material-ui/core/Button"
import { navigate } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
const UserInformationShipping = ({ user, setUpdateInfo, openUpdateForm }) => {
  const {
    translation: {
      checkout: { userInformation },
    },
    lang,
  } = useLanguage()
  const { theme } = useTheme()
  const userAddress =
    lang === "en"
      ? `${user.information?.address}  
  ${user.information?.ward} Ward, ${user.information?.district} Dist
  ${user.information?.city} City`
      : `${user.information?.address}  
  Phường ${user.information?.ward}, Quận ${user.information?.district}, Thành phố
  ${user.information?.city}`
  const navigateToPayment = () => {
    trackCustomEvent({
      action: "Click",
      category: "checkout",
      label: "Shipping to payment",
    })
    navigate("/checkout/payment")
  }
  const onUpdateInfo = () => {
    trackCustomEvent({
      action: "Click",
      category: "checkout",
      label: "update user information",
    })
    setUpdateInfo(true)
  }
  return (
    <Wrapper theme={theme}>
      <UserName>{user.information?.fullname}</UserName>
      <p>
        {userInformation.phone} : {user.information?.phone}
      </p>
      <p>
        {userInformation.address} : {userAddress}
      </p>
      <UserInfomationControls>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={navigateToPayment}
        >
          {userInformation.button_proceed_order}
        </Button>
        {!openUpdateForm && (
          <Button size="small" variant="contained" onClick={onUpdateInfo}>
            {userInformation.button_change_information}
          </Button>
        )}
      </UserInfomationControls>
    </Wrapper>
  )
}

export default UserInformationShipping
