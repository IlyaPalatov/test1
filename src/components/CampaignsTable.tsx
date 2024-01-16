import React from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { Table } from 'react-bootstrap';

interface CampaignsTableProps {
  campaigns: Array<{ campaignId: number; clicks: number; cost: number; date: string }>;
   onRowClick: (profileId: number) => void;
}

const CampaignsTable: React.FC<CampaignsTableProps> = ({ campaigns }) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Campaign ID', accessor: 'campaignId' },
      { Header: 'Clicks', accessor: 'clicks' },
      { Header: 'Cost', accessor: 'cost' },
      { Header: 'Date', accessor: 'date' },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data: campaigns,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  return (
    <Table striped bordered hover {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={row.id}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CampaignsTable;
