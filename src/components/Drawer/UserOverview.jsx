import React from "react"
import {
  Container,
  Wrapper,
  AvatarContainer,
  UserName,  
} from "./styles/UserOverview.styles"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { useTheme } from "../../theme"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import useLanguage from "../Global/useLanguage"
import {SettingItem, SettingItemIcon, SettingItemText, SettingButton,SettingItemLink} from "../Header/styles/UserSettingsDropdown.styles"
import {connect} from "react-redux";
import {signOutUser} from "../../redux/user/user.actions"

const UserOverview = ({ user, signOutUser }) => {
  const { theme } = useTheme()  
  const {i18n, lang} = useLanguage();
  const {user : userTranslation} = i18n.store.data[lang].translation;
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
          <SettingItemLink to={userTranslation.settingAccount.path} theme={theme}>
            <SettingItemIcon>{userTranslation.settingAccount.icon}</SettingItemIcon>
            <SettingItemText>{userTranslation.settingAccount.name}</SettingItemText>
          </SettingItemLink>
          <SettingItemLink to={userTranslation.orderedHistory.path} theme={theme}>
            <SettingItemIcon>{userTranslation.orderedHistory.icon}</SettingItemIcon>
            <SettingItemText>{userTranslation.orderedHistory.name}</SettingItemText>
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
  signOutUser : () => dispatch(signOutUser())
})
export default connect(null, mapDispatchToProps)(UserOverview)
