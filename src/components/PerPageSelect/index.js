import React from "react";

function PerPageSelect(props) {
  return <div>
    <select value={props.value} onChange={props.onChange}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={25}>25</option>
      <option value={50}>50</option>
    </select>
    {" "}users per page
          </div>
}

export default PerPageSelect;