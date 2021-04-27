import React from "react"
import useLanguage from "../Global/useLanguage"
import { SampleMode } from "./styles/SettingColorMode.styles"
import Button from "@material-ui/core/Button"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { useStyles } from "./styles/SettingLanguages.styles"
import { useThemeUI, useColorMode} from "theme-ui"
const SettingLanguages = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)
  const { i18n, lang } = useLanguage()
  const { theme, colorMode : themeColorMode } = useThemeUI()
  const modes = Object.keys(theme.colors).map(color => color)
  const { colorMode: colorModeTranslation } = i18n.store.data[lang].translation
  const [colorMode, setColorMode] = useColorMode()
  console.log(theme, themeColorMode)
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  const onChangeColorMode = selectedMode => {   
    if(selectedMode !== modes.includes(selectedMode)){      
      console.log(selectedMode)
      setColorMode(selectedMode);
    }
    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault()
      setOpen(false)
    }
  }  

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <div className={classes.root}>
      <Button
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <SampleMode theme={theme.colors[colorMode]} />
        <span>{colorModeTranslation[colorMode]}</span>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {modes.map(mode => (
                    <MenuItem
                      key={mode}
                      onClick={() => onChangeColorMode(mode)}
                    >
                      <SampleMode theme={theme.colors[mode]} />
                      <span>{colorModeTranslation[mode]}</span>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  )
}

export default SettingLanguages
