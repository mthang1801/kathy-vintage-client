import React from "react"
import { useLanguage } from "../../locales"
import { Title, Policies } from "./styles/Footer.styles"
import { Link } from "gatsby"
const AddressContact = () => {
  const {
    translation: {
      footer: {
        licensesPolicy: { title, listPolicies },
      },
    },
  } = useLanguage()

  const policies = Object.keys(listPolicies).map(k => listPolicies[k])
  return (
    <section>
      <Title>{title}</Title>
      <Policies>
        {policies.map(policy => (
          <Link key={policy.name} to={policy.path}>
            {policy.name}
          </Link>
        ))}
      </Policies>
    </section>
  )
}

export default AddressContact
