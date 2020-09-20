import React from "react";
import { useTable, useSortBy } from "react-table";

function Table(props) {
  const columns = React.useMemo(() =>
    [
      {
        Header: 'Employee Table',
        columns: [
          {
            Header: 'ID',
            accessor: 'id',
            sortType: 'basic',
            canSort: true,
          },
          {
            Header: 'Name',
            accessor: 'name',
          },
          {
            Header: 'Role',
            accessor: 'role',
          },
          {
            Header: 'Email',
            accessor: 'email',
          }
        ]
      },
    ],
    []
  );

  const data = React.useMemo(() => props.data, [props.data]);
  const tableInstance = useTable({ columns, data }, useSortBy)

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance

  return (
    // apply the table props
    <table {...getTableProps()}>
      <thead>
        {// Loop over the header rows
          headerGroups.map(headerGroup => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {// Loop over the headers in each row
                headerGroup.headers.map(column => (
                  // Apply the header cell props
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {// Render the header
                      column.render('Header')}
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </th>
                ))}
            </tr>
          ))}
      </thead>
      {/* Apply the table body props */}
      <tbody {...getTableBodyProps()}>
        {// Loop over the table rows
          rows.map(row => {
            // Prepare the row for display
            prepareRow(row)
            return (
              // Apply the row props
              <tr {...row.getRowProps()}>
                {// Loop over the rows cells
                  row.cells.map(cell => {
                    // Apply the cell props
                    return (
                      <td {...cell.getCellProps()}>
                        {// Render the cell contents
                          cell.render('Cell')}
                      </td>
                    )
                  })}
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default Table;