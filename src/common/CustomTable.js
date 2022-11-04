import React, { useMemo } from 'react'
import { useTable,useGlobalFilter } from 'react-table'

function CustomTable ({tableColumns, tableData}) {

  const columns = useMemo(() => tableColumns, [])
  const data = useMemo(() => tableData, [tableData])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns: columns, data: data},useGlobalFilter)
 
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody style={{textAlign:'start',border:'2px solid black' }}{...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell)=> {
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