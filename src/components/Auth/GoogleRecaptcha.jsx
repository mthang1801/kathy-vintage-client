import React from "react"
import ReCAPTCHA from "react-google-recaptcha"
const SITE_KEY = "6LcmCMkaAAAAAGDrEpHQ_oOod_X9bjpN38lHM_JB"

const GoogleRecaptcha = React.forwardRef(({ onChange }, ref) => {
  return (
    <ReCAPTCHA
      style={{ display: "inline-block", margin: "1rem auto" }}
      theme="dark"
      badge="inline"
      size="normal"
      ref={ref}
      sitekey={SITE_KEY}
      onChange={onChange}
    />
  )
})

export default GoogleRecaptcha
