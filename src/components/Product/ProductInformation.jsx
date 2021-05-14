import React from "react"
import {
  Title,
  Table,
  TableRow,
  TableCell,
} from "./styles/ProductInformation.styles"
import useLanguage from "../Global/useLanguage"
import { Link } from "gatsby"
import {v4 as uuidv4} from "uuid"
import {useTheme} from "../../theme"
const ProductInformation = ({ product }) => {
  const { i18n, lang } = useLanguage()
  const { productPage } = i18n.store.data[lang].translation.product
  const { information_en, information_vi, images } = product
  const {theme} = useTheme()
  const information = lang === "en" ? information_en : information_vi
  console.log(information)
  return (
    <>
      <Title>{productPage.information}</Title>
      <Table>
        {information.map(({ key, value, values }) => (
          <TableRow key={key} theme={theme}>
            <TableCell theme={theme}>{key}</TableCell>
            <TableCell>{values? values.map(valueItem => <p key={uuidv4()}>{valueItem}</p>) : value}</TableCell>           
          </TableRow>
        ))}
      </Table>
    </>
  )
}

export default ProductInformation
