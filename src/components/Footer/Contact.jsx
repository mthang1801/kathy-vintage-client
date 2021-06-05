import React from "react"
import { useLanguage } from "../../locales"
import { Title, List, ContactLink } from "./styles/Footer.styles"

const AddressContact = () => {
  const {
    translation: {
      footer: {
        contact: { title, listContacts },
      },
    },
  } = useLanguage()

  return (
    <section>
      <Title>{title}</Title>
      <List>
        {listContacts.map(contact => (
          <ContactLink
            key={contact.name}
            href={contact.path}
            title={contact.name}
            icon={contact.name}
          >
            {contact.icon}
          </ContactLink>
        ))}
      </List>
    </section>
  )
}

export default AddressContact
