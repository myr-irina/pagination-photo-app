import React from "react";

export const Pagination = ({ photosPerPage, totalPhotos, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="Pagination">
        {pageNumbers.map((number) => {
          return (
            <>
              <li key={number} className="pageItem">
                <a
                  onClick={() => paginate(number)}
                  href="!#"
                  className="page-link">
                  {number}
                </a>
              </li>
            </>
          );
        })}
      </ul>
    </nav>
  );
};
