import React from "react";

function TableHeader(props) {
  return <thead className="table-dark">
  <tr>
    {props.headers.map(header => {
      return <th key={header} id={header} onClick={props.sortClick} scope="col">{header}{
        props.sortedBy === header
          ? !props.sortAscending
            ? ' 🔽'
            : ' 🔼'
          : ''
      }</th>
    })}
  </tr>
</thead>
}

export default TableHeader;