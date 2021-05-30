import React from "react"
import {
  Container,
  Wrapper,
  AvatarContainer,
  UserName,
} from "./styles/UserOverview.styles"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useTheme } from "../../../theme"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import useLanguage from "../../Global/useLanguage"
import {
  SettingItem,
  SettingItemIcon,
  SettingItemText,
  SettingButton,
  SettingItemLink,
} from "../../Dropdown/styles/UserSettingsDropdown.styles"
import { connect } from "react-redux"
import { signOutUser } from "../../../redux/user/user.actions"
import { navigate } from "gatsby"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
const UserOverview = ({ user, signOutUser }) => {
  const { theme } = useTheme()
  const { i18n, lang } = useLanguage()
  const { user: userTranslation } = i18n.store.data[lang].translation

  const onNavigateToUserPage = (path, state) => {
    trackCustomEvent({
      action: "Click",
      category: "navigate",
      label: `${path} from ${state}`,
    })
    navigate(path, { state: { from: state } })
  }
  return (
    <Container theme={theme}>
      <Accordion>
        <AccordionSummary
          aria-controls="panel-user-overview"
          id="panel-user-overview"
        >
          <Wrapper theme={theme}>
            <AvatarContainer>
              <LazyLoadImage
                effect="blur"
                src={user?.photoURL}
                alt={user?.photoURL}
              />
            </AvatarContainer>
            <UserName>{user.displayName}</UserName>
          </Wrapper>
        </AccordionSummary>
        <AccordionDetails>
          <SettingItemLink
            onClick={() =>
              onNavigateToUserPage(
                userTranslation.settingAccount.path,
                userTranslation.settingAccount.key
              )
            }
            theme={theme}
          >
            <SettingItemIcon>
              {userTranslation.settingAccount.icon}
            </SettingItemIcon>
            <SettingItemText>
              {userTranslation.settingAccount.name}
            </SettingItemText>
          </SettingItemLink>
          <SettingItemLink
            onClick={() =>
              onNavigateToUserPage(
                userTranslation.ordersHistory.path,
                userTranslation.ordersHistory.key
              )
            }
            theme={theme}
          >
            <SettingItemIcon>
              {userTranslation.ordersHistory.icon}
            </SettingItemIcon>
            <SettingItemText>
              {userTranslation.ordersHistory.name}
            </SettingItemText>
          </SettingItemLink>
          <SettingItem onClick={signOutUser} theme={theme}>
            <SettingItemIcon>{userTranslation.signout.icon}</SettingItemIcon>
            <SettingItemText>{userTranslation.signout.name}</SettingItemText>
          </SettingItem>
        </AccordionDetails>
      </Accordion>
    </Container>
  )
}
const mapDispatchToProps = dispatch => ({
  signOutUser: () => dispatch(signOutUser()),
})
export default connect(null, mapDispatchToProps)(UserOverview)
