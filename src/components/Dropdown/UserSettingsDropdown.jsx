import React from "react"
import { useLanguage } from "../../locales"
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
  SettingItemText,
} from "./styles/UserSettingsDropdown.styles"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { navigate } from "gatsby"
import { useTheme } from "../../theme"
import { connect } from "react-redux"
import { signOutUser } from "../../redux/user/user.actions"
const UserSettingsDropdown = ({ user, signOut }) => {
  const {
    translation: { user: userTranslation },
  } = useLanguage()
  const { theme } = useTheme()

  const onLogout = e => {
    e.preventDefault()
    signOut()
  }

  const onNavigateToUserPage = (path, state) => {
    navigate(path, { state: { from: state } })
  }
  return (
    <Wrapper>
      <ManageAccount>
        <UserAvatar to={userTranslation.settingAccount.path}>
          <LazyLoadImage effect="blur" src={user.photoURL} />
        </UserAvatar>
        <UserName>{user.displayName}</UserName>
        <UserEmail>{user.email}</UserEmail>
        <SettingButton
          theme={theme}
          onClick={e =>
            onNavigateToUserPage(
              userTranslation.settingAccount.path,
              userTranslation.settingAccount.key
            )
          }
        >
          {userTranslation.settingAccount.name}
        </SettingButton>
      </ManageAccount>
      <Divider />
      <SettingItemLink
        onClick={() =>
          onNavigateToUserPage(
            userTranslation.ordersHistory.path,
            userTranslation.ordersHistory.key
          )
        }
        theme={theme}
      >
        <SettingItemIcon>{userTranslation.ordersHistory.icon}</SettingItemIcon>
        <SettingItemText>{userTranslation.ordersHistory.name}</SettingItemText>
      </SettingItemLink>
      <SettingItem theme={theme} onClick={onLogout}>
        <SettingItemIcon>{userTranslation.signout.icon}</SettingItemIcon>
        <SettingItemText>{userTranslation.signout.name}</SettingItemText>
      </SettingItem>
    </Wrapper>
  )
}
const mapDispatchToMap = dispatch => ({
  signOut: () => dispatch(signOutUser()),
})

export default connect(null, mapDispatchToMap)(UserSettingsDropdown)
