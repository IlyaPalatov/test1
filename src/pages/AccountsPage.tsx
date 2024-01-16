import React from 'react';
import AccountsTable from '../components/AccountsTable';

const AccountsPage: React.FC = () => {
  const accounts = [
      { accountId: 1, email: 'test1@test.com', authToken: 'token1', creationDate: '2022-01-01' },
      { accountId: 2, email: 'test2@test.com', authToken: 'token2', creationDate: '2019-05-21' },
  ];

  const handleRowClick = (accountId: number) => {};

  return (
    <div>
      <h2>Accounts</h2>
      <AccountsTable accounts={accounts} onRowClick={handleRowClick} />
    </div>
  );
};

export default AccountsPage;
