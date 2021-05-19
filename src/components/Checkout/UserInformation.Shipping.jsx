import React from "react"
import {
  Wrapper,
  UserName,
  UserInfomationControls,
} from "./styles/UserInformation.Shipping.styles"
import useLanguage from "../Global/useLanguage"
import { useTheme } from "../../theme"
import Button from "@material-ui/core/Button"
import {navigate} from "gatsby"
const UserInformationShipping = ({ user, setUpdateInfo, openUpdateForm }) => {
  const { i18n, lang } = useLanguage()
  const { theme } = useTheme()
  const { userInformation } = i18n.store.data[lang].translation.checkout
  const userAddress =
    lang === "en"
      ? `${user.information?.address}  
  ${user.information?.ward} Ward, ${user.information?.district} Dist
  ${user.information?.city} City`
      : `${user.information?.address}  
  Phường ${user.information?.ward}, Quận ${user.information?.district}, Thành phố
  ${user.information?.city}`
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
        <Button size="small" color="primary" variant="contained" onClick={() => navigate("/checkout/payment")}>
          {userInformation.button_proceed_order}
        </Button>
        {!openUpdateForm && <Button
          size="small"
          variant="contained"
          onClick={() => setUpdateInfo(true)}
        >
          {userInformation.button_change_information}
        </Button>}
      </UserInfomationControls>
    </Wrapper>
  )
}

export default UserInformationShipping
