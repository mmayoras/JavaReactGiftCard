import React from "react";

import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";

const SearchBar = ({ onSearchTermChange, onToggleFilter, toggleFilterBtnLabel }) => {
  return (
    <div style={{ marginTop: "10px" }} className="mui--text-center">
      <span style={{ marginRight: "20px", marginTop: "10px" }}>
        <input
          style={{ height: "42px", width: "70%" }}
          placeholder={"Type Here to Search"}
          onChange={onSearchTermChange}
        />
        <span><button style={{height:'39px;'}} className="button md">Search</button></span>
      </span>
      <span>
        <button className="button md" onClick={onToggleFilter}>
          {toggleFilterBtnLabel}
        </button>
      </span>
    </div>
  );
};

export default SearchBar;
