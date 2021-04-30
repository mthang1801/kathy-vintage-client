import React from "react"
import useLanguage from "../Global/useLanguage"
import { Title, List, ListItemIcon, ContactLink } from "./styles/Footer.styles"

const AddressContact = () => {
  const { i18n, lang } = useLanguage()
  const {
    contact: { title, listContacts },
  } = i18n.store.data[lang].translation.footer
  console.log(listContacts)
  return (
    <section>
      <Title>{title}</Title>
      <List>
        {listContacts.map(contact => (
          <ContactLink
            key={contact.name}
            to={contact.path}
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