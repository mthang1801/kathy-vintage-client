import React, { useEffect } from "react"
import { useStyles, Tooltip } from "./styles/ContactSpeedDial.styles"
import Button from "@material-ui/core/Button"
import SpeedDial from "@material-ui/lab/SpeedDial"
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon"
import SpeedDialAction from "@material-ui/lab/SpeedDialAction"
import AccountBoxIcon from "@material-ui/icons/AccountBox"
import {useLanguage} from "../../../../locales"
import { Wrapper } from "./styles/ContactSpeedDial.styles"
import { navigate } from "gatsby"
import { useTheme } from "../../../../theme"
import { trackCustomEvent, OutboundLink } from "gatsby-plugin-google-analytics"

const ContactSpeedDial = () => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  
  const { translation : {contacts}, lang } = useLanguage()
  
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
        break;
      case "zalo":
        navigate("https://zalo.me/0973594645")
        break;
      case "phone" : 
        if(typeof window !== "undefined") window.open(`tel:0939323700`);
        break;
      case "email":
        document.getElementById("send-mail").click()
      default:
        return
    }
  }
 

  return (
    <>     
      <Wrapper theme={theme}>
        <SpeedDial
          ariaLabel="Contact SpeedDial"
          className={classes.speedDial}          
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
          {contacts && contacts.map(contact => (
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
