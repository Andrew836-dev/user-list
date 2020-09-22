import React from "react";
import TableHeader from "../TableHeader";
import Table from "../Table";

function TableContainer(props) {
  return (
    <table className="table table-sm table-striped">
      <caption>{props.caption}</caption>
      <TableHeader
        headers={props.headers}
        sortedBy={props.sortedBy}
        sortAscending={props.sortAscending}
        sortClick={props.sortClick}
      />
      <Table
        headers={props.headers}
        data={props.displayData}
      />
    </table>
  )
}

export default TableContainer;