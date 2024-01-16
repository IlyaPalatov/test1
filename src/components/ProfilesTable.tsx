import React from 'react';
import { useTable, useSortBy, useFilters, usePagination } from 'react-table';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface ProfilesTableProps {
  profiles: Array<{
    profileId: number;
    country: string;
    marketplace: string;
  }>;
  onRowClick: (profileId: number) => void;
}

const ProfilesTable: React.FC<ProfilesTableProps> = ({ profiles, onRowClick }) => {
  const columns = React.useMemo(
    () => [
      { Header: 'Profile ID', accessor: 'profileId' },
      { Header: 'Country', accessor: 'country' },
      { Header: 'Marketplace', accessor: 'marketplace' },
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
      data: profiles,
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
            <tr key={row.id} onClick={() => onRowClick(row.original.profileId)}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>
                  {cell.column.id === 'profileId' ? (
                    <Link to={`/campaigns/${row.original.profileId}`}>{cell.render('Cell')}</Link>
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

export default ProfilesTable;
