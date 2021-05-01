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
import { useStyles } from "../Setting/styles/SettingLanguages.styles"
import {useTheme} from "../../theme"
const SettingLanguages = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)
  const { i18n, lang } = useLanguage()    
  const { colorMode: colorModeTranslation } = i18n.store.data[lang].translation
  const {setColorMode, theme, colorMode, themes} = useTheme()
  
  const modes = Object.keys(themes).map(mode => mode);  
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
    if(typeof selectedMode === "string" && selectedMode && modes.includes(selectedMode) && selectedMode !== colorMode){                  
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
        <SampleMode theme={theme} />
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
                      <SampleMode theme={themes[mode]} />
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
