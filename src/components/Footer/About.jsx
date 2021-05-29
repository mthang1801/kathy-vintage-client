import React from 'react'
import useLanguage from "../Global/useLanguage";
import {Title} from "./styles/Footer.styles"
const AddressContact = () => {
  const {i18n, lang} = useLanguage()
  const {about} = i18n.store.data[lang].translation.footer    
  return (
    <section>
      <Title>{about.title}</Title>
      { about.companyName && <p>{about.companyName}</p>}
      {about.registerDate && <p>{about.registerDate}</p>}
      {about.taxCode && <p>{about.taxCode}</p>}
      {about.address && <p>{about.address}</p>}
      {about.businessCode && <p>{about.businessCode}</p>}
      {about.bisinessDateAward && <p>{about.businessDateAward}</p>}
      {about.awardAt && <p>{about.awardAt}</p>}
      {about.hotline && <p>{about.hotline}</p>}
      <br/>
      {about.otherBrandsTitle && <div><strong>{about.otherBrandsTitle}</strong></div> }
      {about?.otherBrands?.length ? about.otherBrands.map(brand => (
        <p key={brand}>{brand}</p>
      )): null}
    </section>
  )
}

export default AddressContact
