import React from "react"
import ReactPaginate from "react-paginate"
import {Wrapper} from "./styles/ProductsPagination.styles"
import {useTheme} from "../../../theme"
const ProductsPagination = ({ numPages, currentPage, handlePageClick }) => {
  const {theme} = useTheme();
  return (
    <Wrapper theme={theme}>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        initialPage={currentPage-1}
        pageCount={numPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}       
      />
    </Wrapper>
  )
}

export default ProductsPagination
