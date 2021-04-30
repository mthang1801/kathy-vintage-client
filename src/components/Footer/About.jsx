import React from 'react'
import useLanguage from "../Global/useLanguage";
import {Title} from "./styles/Footer.styles"
const AddressContact = () => {
  const {i18n, lang} = useLanguage()
  const {about} = i18n.store.data[lang].translation.footer    
  return (
    <section>
      <Title>{about.title}</Title>
      <p>{about.companyName}</p>
      <p>{about.registerDate}</p>
      <p>{about.taxCode}</p>
      <p>{about.address}</p>
      <p>{about.businessCode}</p>
      <p>{about.bisinessDateAward}</p>
      <p>{about.awardAt}</p>
      <p>{about.hotline}</p>
      <br/>
      <div><strong>{about.otherBrandsTitle}</strong></div>      
      {about.otherBrands.map(brand => (
        <p key={brand}>{brand}</p>
      ))}
    </section>
  )
}

export default AddressContact
