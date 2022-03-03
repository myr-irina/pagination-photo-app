import React from "react";

export const Pagination = ({ photosPerPage, totalPhotos }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="Pagination">
        {pageNumbers.map((number) => {
          <li key={number} className="pageItem">
            <a href="!#" className="page-link">
              {number}
            </a>
          </li>;
        })}
      </ul>
    </nav>
  );
};
