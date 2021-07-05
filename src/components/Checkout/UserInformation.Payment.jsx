import React from "react"
import { Wrapper, Link } from "./styles/UserInformation.Payment.styles"
import { useTheme } from "../../theme"
import { useLanguage } from "../../locales"
import { navigate } from "gatsby"
const UserInformation = ({ user }) => {
  const { theme } = useTheme()
  const {
    translation: {
      checkout: { userInformation },
    },
  } = useLanguage()
  const onGoBackShipping = () => {
    navigate("/checkout/shipping", {
      state: { from: "/checkout/payment" },
    })
  }
  if (!user.information) return null
  return (
    <Wrapper theme={theme}>
      <p>
        {userInformation.fullname}:{" "}
        <strong>{user.information?.fullname}</strong>
      </p>
      <p>
        {userInformation.address}:{" "}
        <strong>
          {user.information?.address}, {userInformation.ward}{" "}
          {user.information?.ward}, {userInformation.district}{" "}
          {user.information.district}, {userInformation.city}{" "}
          {user.information.city}
        </strong>
      </p>
      <p>
        <Link type="button" tabIndex={0} onClick={onGoBackShipping}>
          {userInformation.link_change_information}
        </Link>
      </p>
    </Wrapper>
  )
}

export default UserInformation
