import React, { useMemo } from 'react'
import { useTable, useGlobalFilter } from 'react-table'
import './style.scss';

function CustomTable({ tableColumns, tableData }) {

  const columns = useMemo(() => tableColumns, [])
  const data = useMemo(() => tableData, [tableData])
  console.log(tableData);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns: columns, data: data }, useGlobalFilter)


console.log(rows)
  return (
    <>
      <table className='custom-table-ui' {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
        >
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr               
                {...row.getRowProps()}
                 className={row.isSearched ===true?"": "selected"}
                
                 >
                {row.cells.map((cell) => {
                  return (
                    <td 
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
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