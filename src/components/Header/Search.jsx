import React, { useState } from "react"
import { SearchForm} from "./styles/Search.styles"
import useLanguage from "../Global/useLanguage"
import { FaSearch } from "react-icons/fa"
const Search = () => {
  const [openSearchInput, setOpenSearchInput] = useState(false)
  const {i18n, lang} = useLanguage();
  const {search} = i18n.store.data[lang].translation;
  return (
    <SearchForm open={openSearchInput} onSubmit={e => e.preventDefault()}>
      <input type="text" placeholder={search.placeholder} />
      <span onClick={() => setOpenSearchInput(prevStatus => !prevStatus)}>
        <FaSearch />
      </span>
    </SearchForm>
  )
}

export default Search
