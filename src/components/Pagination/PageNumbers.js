import React from "react";
import { Pagination, PaginationItem } from "@mui/material";

export const PageNumbers = ({ photosPerPage, totalPhotos, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination count={totalPhotos}>
      <PaginationItem>
        {pageNumbers.map((number) => {
          return (
            <>
              <li key={number} className="pageItem">
                <a
                  onClick={() => paginate(number)}
                  href="!#"
                  className="page-link"
                >
                  {number}
                </a>
              </li>
            </>
          );
        })}
      </PaginationItem>
    </Pagination>
  );
};
