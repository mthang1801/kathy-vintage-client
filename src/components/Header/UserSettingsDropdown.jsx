import React from "react"
import useLanguage from "../Global/useLanguage"
import {
  Wrapper,
  ManageAccount,
  UserAvatar,
  UserName,
  UserEmail,
  SettingButton,
  Divider,
  SettingItem, 
  SettingItemLink,
  SettingItemIcon, 
  SettingItemText
} from "./styles/UserSettingsDropdown.styles"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { navigate } from "gatsby"
import { useTheme } from "../../theme/"
import {connect} from "react-redux";
import {signOutUser} from "../../redux/user/user.actions";
const UserSettingsDropdown = ({ user, signOut }) => {
  const { i18n, lang } = useLanguage()
  const { user: userTranslation } = i18n.store.data[lang].translation
  const { theme } = useTheme();

  const onLogout = (e) => {
    e.preventDefault();
    signOut();
  }
  return (
    <Wrapper>
      <ManageAccount>
        <UserAvatar to={userTranslation.settingAccount.path}>
          <LazyLoadImage effect="blur" src={user.photoURL} />
        </UserAvatar>
        <UserName>{user.displayName}</UserName>
        <UserEmail>{user.email}</UserEmail>
        <SettingButton theme={theme} to={userTranslation.settingAccount.path}>
          {userTranslation.settingAccount.name}
        </SettingButton>
      </ManageAccount>
      <Divider/>
      <SettingItemLink to={userTranslation.orderedHistory.path} theme={theme}>
        <SettingItemIcon>{userTranslation.orderedHistory.icon}</SettingItemIcon>
        <SettingItemText>{userTranslation.orderedHistory.name}</SettingItemText>
      </SettingItemLink>
      <SettingItem theme={theme} onClick={onLogout}>
        <SettingItemIcon>{userTranslation.signout.icon}</SettingItemIcon>
        <SettingItemText>{userTranslation.signout.name}</SettingItemText>
      </SettingItem>
    </Wrapper>
  )
}
const mapDispatchToMap = dispatch=> ({
  signOut : () => dispatch(signOutUser())
})

export default connect(null, mapDispatchToMap)(UserSettingsDropdown)
