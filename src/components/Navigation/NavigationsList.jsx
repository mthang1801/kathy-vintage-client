import React, { useState, useEffect } from "react"
import { useLanguage } from "../../locales"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Setting,
} from "./styles/NavigationsList.styles"
import SettingDialog from "../Setting/SettingDialog"
import { useTheme } from "../../theme"
const NavigationsList = () => {
  const [formatNavigations, setFormatNavigations] = useState([])
  const [openDialog, setOpenDialog] = useState(false)
  const {
    translation: { navigations },
  } = useLanguage()
  const { theme } = useTheme()
  useEffect(() => {
    if (Object.entries(navigations).length) {
      const formatNavigations = Object.keys(navigations)
        .map(navigation => navigations[navigation])
        .filter(
          navigation => navigation.id !== "shop" && navigation.id !== "setting"
        )
      setFormatNavigations(formatNavigations)
    }
  }, [navigations])
  const onOpenDialog = () => {
    setOpenDialog(true)
  }
  return (
    <>
      <List>
        {formatNavigations.length
          ? formatNavigations.map(navigation => (
              <ListItem key={navigation.id} to={navigation.path} theme={theme}>
                <ListItemIcon>{navigation.icon}</ListItemIcon>
                <ListItemText>{navigation.name}</ListItemText>
              </ListItem>
            ))
          : null}
        <Setting theme={theme} onClick={onOpenDialog}>
          <ListItemIcon>{navigations.setting.icon}</ListItemIcon>
          <ListItemText>{navigations.setting.name}</ListItemText>
        </Setting>
      </List>
      <SettingDialog open={openDialog} setOpen={setOpenDialog} />
    </>
  )
}

export default NavigationsList
