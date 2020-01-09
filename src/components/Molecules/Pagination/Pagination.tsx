import React from "react";
import PaginationButton from "../../Atoms/PaginationButton/PaginationButton";

import "./Pagination.css";

interface Props {
  page: number;
  increasePagination: () => void;
  decreasePagination: () => void;
  maxPage: number;
}

const Pagination: React.SFC<Props> = ({
  page,
  increasePagination,
  decreasePagination,
  maxPage
}) => (
  <div className="pagination-wrapper">
    <PaginationButton
      buttonText="Prev Page"
      disabled={page === 1}
      onClick={decreasePagination}
    />
    <p className="page-title">{page}</p>
    <PaginationButton
      buttonText="Next Page"
      disabled={page === maxPage}
      onClick={increasePagination}
    />
  </div>
);

export default Pagination;
