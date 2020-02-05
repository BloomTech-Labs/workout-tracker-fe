import React from "react";

const Pagination = ({ total, perPage, page, selected }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map(number => {
        return (
          <li key={number}>
            <a
              href="!#"
              className={selected === number ? "active" : ""}
              onClick={e => {
                e.preventDefault();
                page(number);
              }}
            >
              {number}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
