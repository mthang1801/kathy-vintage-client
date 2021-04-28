import React, { useState, useEffect } from "react"
import useLanguage from "../Global/useLanguage"
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Setting,
} from "./styles/NavigationsList.styles"
import SettingDialog from "../Setting/SettingDialog"
import { useThemeUI } from "theme-ui"
const NavigationsList = () => {
  const [formatNavigations, setFormatNavigations] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const { i18n, lang } = useLanguage()
  const { navigations } = i18n.store.data[lang].translation
  const { theme, colorMode } = useThemeUI()
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
    setOpenDialog(true);
  }
  return (
    <>
    <List>
      {formatNavigations.length
        ? formatNavigations.map(navigation => (
            <ListItem
              key={navigation.id}
              to={navigation.path}
              theme={theme.colors[colorMode]}
            >
              <ListItemIcon>{navigation.icon}</ListItemIcon>
              <ListItemText>{navigation.name}</ListItemText>
            </ListItem>
          ))
        : null}
      <Setting theme={theme.colors[colorMode]} onClick={onOpenDialog}>
        <ListItemIcon>{navigations.setting.icon}</ListItemIcon>
        <ListItemText>{navigations.setting.name}</ListItemText>
      </Setting>
    </List>
    <SettingDialog open={openDialog} setOpen={setOpenDialog}/>
    </>
  )
}

export default NavigationsList
