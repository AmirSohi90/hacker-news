import React from "react";
import "./Pagination.css";

const Pagination = ({
  page,
  increasePagination,
  decreasePagination,
  maxPage
}) => (
  <div className="pagination-wrapper">
    <button
      style={{
        backgroundColor: page === 1 ? "grey" : "#4CAF50",
        cursor: page === 1 ? "not-allowed" : "pointer"
      }}
      className="page-decrease button"
      disabled={page === 1}
      onClick={() => decreasePagination()}
    >
      Prev Page
    </button>
    <p className="page-title">{page}</p>
    <button
      style={{
        backgroundColor: page === maxPage ? "grey" : "#4CAF50",
        cursor: page === maxPage ? "not-allowed" : "pointer"
      }}
      className="page-increase button"
      disabled={page === maxPage}
      onClick={() => increasePagination()}
    >
      Next Page
    </button>
  </div>
);

export default Pagination;
