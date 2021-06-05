import React from "react"
import {
  Title,
  Table,
  TableRow,
  TableCell,
} from "./styles/ProductInformation.styles"
import { useLanguage } from "../../locales"
import { v4 as uuidv4 } from "uuid"
import { useTheme } from "../../theme"
const ProductInformation = ({ product }) => {
  const {
    translation: {
      product: { productPage },
    },
    lang,
  } = useLanguage()
  const { information_en, information_vi, images } = product
  const { theme } = useTheme()
  const information = lang === "en" ? information_en : information_vi

  return (
    <>
      <Title>{productPage.information}</Title>
      {information?.length ? (
        <Table>
          {information.map(({ key, value, values }) => (
            <TableRow key={key} theme={theme}>
              <TableCell theme={theme}>{key}</TableCell>
              <TableCell>
                {values
                  ? values.map(valueItem => <p key={uuidv4()}>{valueItem}</p>)
                  : value}
              </TableCell>
            </TableRow>
          ))}
        </Table>
      ) : null}
    </>
  )
}

export default ProductInformation
