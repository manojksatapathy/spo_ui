import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
  TableSelectAll,
  TableSelectRow
} from 'carbon-components-react';

const NDA_OUT_Table = ({ rows, headers }) => {
  const getRowDescription = rowId => {
    const row = rows.find(({ id }) => id === rowId);
    return row ? row.description : '';
  };

  return (
    <DataTable
      isSortable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
        getSelectionProps
      }) => (
        <TableContainer
          title={<div style={{padding: "0.875rem 0.15rem 0rem"}}>Out of scope</div>}>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableSelectAll {...getSelectionProps()} />
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableSelectRow {...getSelectionProps({ row })} />
                  {row.cells.map(cell => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default NDA_OUT_Table;
