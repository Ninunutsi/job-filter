import React from "react";

const Filter = ({ searchedItems, handleDelete }) => {
  return (
    <div className="filter-container">
      {searchedItems.map((item, index) => (
        <div className="filter-div">
          <span className="filter-span" key={index}>
            {item}
          </span>
          <span className="x" onClick={() => handleDelete(index)}>
            &times;
          </span>
        </div>
      ))}
    </div>
  );
};

export default Filter;
