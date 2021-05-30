import React from "react"
import useLanguage from "../Global/useLanguage"
import { Title, Policies } from "./styles/Footer.styles"
import { Link } from "gatsby"
import {trackCustomEvent} from "gatsby-plugin-google-analytics"
const AddressContact = () => {
  const { i18n, lang } = useLanguage()
  const {
    licensesPolicy: { title, listPolicies },
  } = i18n.store.data[lang].translation.footer
  const policies = Object.keys(listPolicies).map(k => listPolicies[k])
  return (
    <section>
      <Title>{title}</Title>
      <Policies>
        {policies.map(policy => (
          <Link key={policy.name} to={policy.path} onClick={() => {
            trackCustomEvent({
              action : "Click",
              category : "navigate"
            })
          }}>
            {policy.name}
          </Link>
        ))}
      </Policies>
    </section>
  )
}

export default AddressContact
