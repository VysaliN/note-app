import React from "react";
import "./Search.css";

const Search = ({ setSearchTitle }) => {
  return (
    <div className="search">
      <input
        type="search"
        onChange={(e) => setSearchTitle(e.target.value)}
        placeholder="Search by Title"
      />
    </div>
  );
};

export default Search;
