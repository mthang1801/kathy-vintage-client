import React from "react"
import { Wrapper, Link } from "./styles/UserInformation.Payment.styles"
import { useTheme } from "../../theme"
import useLanguage from "../Global/useLanguage"
import { navigate } from "gatsby"
import {trackCustomEvent} from "gatsby-plugin-google-analytics"
const UserInformation = ({ user }) => {
  const { theme } = useTheme()
  const { i18n, lang } = useLanguage()
  const { userInformation } = i18n.store.data[lang].translation.checkout
  const onGoBackShipping = () => {
    trackCustomEvent({
      action : "Click", 
      category : "checkout",
      label : "go Back shipping from payment"
    })
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
        <Link
          type="button"
          tabIndex={0}
          onClick={onGoBackShipping}
        >
          {userInformation.link_change_information}
        </Link>
      </p>
    </Wrapper>
  )
}

export default UserInformation
