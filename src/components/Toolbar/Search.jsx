import React, { useState } from "react"
import { SearchForm } from "./styles/Search.styles"
import {useLanguage} from "../../locales"
import { FaSearch } from "react-icons/fa"
import { useTheme } from "../../theme"
const Search = () => {
  const [openSearchInput, setOpenSearchInput] = useState(
    typeof window !== "undefined" && window.innerWidth < 500 ? false : true
  )
  const { translation : {search} } = useLanguage()
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
