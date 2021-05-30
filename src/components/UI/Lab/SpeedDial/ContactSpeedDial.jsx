import React, { useEffect } from "react"
import { useStyles, Tooltip } from "./styles/ContactSpeedDial.styles"
import Button from "@material-ui/core/Button"
import SpeedDial from "@material-ui/lab/SpeedDial"
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon"
import SpeedDialAction from "@material-ui/lab/SpeedDialAction"
import AccountBoxIcon from "@material-ui/icons/AccountBox"
import useLanguage from "../../../Global/useLanguage"
import { Wrapper } from "./styles/ContactSpeedDial.styles"
import { navigate } from "gatsby"
import { useTheme } from "../../../../theme"
import { trackCustomEvent, OutboundLink } from "gatsby-plugin-google-analytics"
import {MESSENGER_PAGE_ID} from "../../../../constants/client"

const ContactSpeedDial = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)
  const { i18n, lang } = useLanguage()
  const { contacts } = i18n.store.data[lang].translation
  const { theme } = useTheme()
  
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const onClickContactItem = key => e => {
    trackCustomEvent({
      action: "Click",
      category: "social contact",
      label: key,
    })
    switch (key) {
      case "facebook":
        navigate("https://facebook.com")
        break
      case "zalo":
        navigate("https://zalo.me/0973594645")
        break
      case "email":
        document.getElementById("send-mail").click()
      default:
        return
    }
  }
  useEffect(() => {
    const script = document.createElement("script")
    script.innerHTML = `window.fbAsyncInit = function() {
      FB.init({
        xfbml            : true,
        version          : 'v10.0'
      });
    };

    (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'))`
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-customerchat"
        attribution="setup_tool"
        page_id={MESSENGER_PAGE_ID}
      ></div>
      <Wrapper theme={theme}>
        <SpeedDial
          ariaLabel="Contact SpeedDial"
          className={classes.speedDial}
          hidden={hidden}
          icon={
            <SpeedDialIcon
              openIcon={<AccountBoxIcon />}
              icon={<AccountBoxIcon />}
            />
          }
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="up"
        >
          {contacts.map(contact => (
            <SpeedDialAction
              key={contact.key}
              icon={contact.icon}
              tooltipTitle={contact.name}
              type={contact.key}
              onClick={onClickContactItem(contact.key)}
              tooltipOpen={contact.key === "phone" ? true : false}
            />
          ))}
        </SpeedDial>
        <a
          href="mailto:tnshop24042021@gmail.com"
          id="send-mail"
          style={{ display: "none" }}
        ></a>
      </Wrapper>
    </>
  )
}

export default ContactSpeedDial
