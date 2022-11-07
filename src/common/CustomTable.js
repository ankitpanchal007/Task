import React, { useMemo } from 'react'
import { useTable, useGlobalFilter } from 'react-table'

function CustomTable({ tableColumns, tableData }) {

  const columns = useMemo(() => tableColumns, [])
  const data = useMemo(() => tableData, [tableData])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: columns, data: data }, useGlobalFilter)

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  style={{
                    border: "1px solid black",
                    backgroundColor: "grey",
                    height: "40px",
                  }}
                  {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody style={{ textAlign: "center", border: "2px solid black" }}{...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
export default CustomTable