import React, { useState } from "react"
import { SearchForm } from "./styles/Search.styles"
import useLanguage from "../Global/useLanguage"
import { FaSearch } from "react-icons/fa"
import { useTheme } from "../../theme"
const Search = () => {
  const [openSearchInput, setOpenSearchInput] = useState(
    window.innerWidth < 500 ? false : true
  )
  const { i18n, lang } = useLanguage()
  const { search } = i18n.store.data[lang].translation
  const {theme } = useTheme()
  return (
    <SearchForm
      open={openSearchInput}
      onSubmit={e => e.preventDefault()}
      theme={theme}
    >
      <input type="text" placeholder={search.placeholder} />
      <span onClick={() => setOpenSearchInput(prevStatus => !prevStatus)}>
        <FaSearch />
      </span>
    </SearchForm>
  )
}

export default Search
