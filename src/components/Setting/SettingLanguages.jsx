import React from "react"
import { useLanguage } from "../../locales"
import { configLang } from "../../locales"
import ReactCountryFlag from "react-country-flag"
import Button from "@material-ui/core/Button"
import ClickAwayListener from "@material-ui/core/ClickAwayListener"
import Grow from "@material-ui/core/Grow"
import Paper from "@material-ui/core/Paper"
import Popper from "@material-ui/core/Popper"
import MenuItem from "@material-ui/core/MenuItem"
import MenuList from "@material-ui/core/MenuList"
import { useStyles } from "./styles/SettingLanguages.styles"
const SettingLanguages = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)
  const { i18n, lang } = useLanguage()
  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  const onChangeLang = selectedLang => {
    if (selectedLang !== lang) {
      i18n.changeLanguage(selectedLang)
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
        <ReactCountryFlag
          countryCode={configLang[lang].code}
          svg
          style={{ fontSize: "24px", marginRight: "10px" }}
        />
        <span style={{ textTransform: "capitalize" }}>
          {configLang[lang].text}
        </span>
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        style={{ zIndex: 1500 }}
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
                  {Object.keys(configLang).map(lang => (
                    <MenuItem key={lang} onClick={() => onChangeLang(lang)}>
                      <ReactCountryFlag
                        countryCode={configLang[lang].code}
                        svg
                        style={{ transform: "scale(1.5)", marginRight: "1rem" }}
                      />
                      <span>{configLang[lang].text}</span>
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
