import React from "react";

function SearchBar(props) {
  return <input
    type="text"
    placeholder="Search"
    onChange={props.onChange}
  />
}
export default SearchBar;