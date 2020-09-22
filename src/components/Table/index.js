import React from "react";

function Table(props) {
  return <>
    <tbody>
      {props.data.map(row => {
        return <tr key={row.id}>
          {props.headers.map(column => {
            return <td key={column.concat(row.id)}>{row[column]}</td>
          })}
        </tr>
      })}
    </tbody>
  </>
}

export default Table;