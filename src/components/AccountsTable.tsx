import React from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface AccountsTableProps {
  accounts: Array<{
    accountId: number;
    email: string;
    authToken: string;
    creationDate: string;
  }>;
  onRowClick: (accountId: number) => void;
}

const AccountsTable: React.FC<AccountsTableProps> = ({ accounts, onRowClick }) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Account ID', accessor: 'accountId' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Auth Token', accessor: 'authToken' },
      { Header: 'Creation Date', accessor: 'creationDate' },
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
      data: accounts,
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
                <td {...cell.getCellProps()}>
                  {cell.column.id === 'accountId' ? (
                    <Link to={`/profiles/${row.original.accountId}`}>{cell.render('Cell')}</Link>
                  ) : (
                    cell.render('Cell')
                  )}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default AccountsTable;
