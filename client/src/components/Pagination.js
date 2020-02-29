import React from 'react';
import { usePagination } from '../customHooks/usePagination';


const Pagination = () => {
  const { totalPages, goToPage, fromSearch, title, currentPage } = usePagination();
  const pages = [];

  for (let index = 1; index <= totalPages; index++) {
    pages.push(index);
  }

  return (
    <section className="pagination">
      {currentPage > 0 && pages.length && pages.map(pageNum => (
        <span key={pageNum}>
          <a
            className={currentPage === pageNum ? "active" : "not-active"}
            onClick={() => goToPage(pageNum, fromSearch, title)}
          >{pageNum}
          </a>
        </span>
      ))}
    </section>
  )

}

export default Pagination;