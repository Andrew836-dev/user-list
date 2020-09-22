import React from "react";
import { prettifyHeader } from "../../utils";
function TableHeader(props) {
  return <thead className="thead-dark">
    <tr>
      {props.headers.map(header => {
        return <th key={header} id={header} onClick={props.sortClick} scope="col">{prettifyHeader(header)}{
          props.sortedBy === header
            ? !props.sortAscending
              ? ' 🔽'
              : ' 🔼'
            : ' ⏺'
        }</th>
      })}
    </tr>
  </thead>
}

export default TableHeader;