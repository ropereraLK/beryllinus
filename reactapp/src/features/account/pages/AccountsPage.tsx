import { useAccounts } from "../api/account.queries";

  const AccountPage = () => {
  const { data: accounts, isLoading, isError, error } = useAccounts();

  if (isLoading) {
    return <div>Loading the account</div>;
  }

  if (isError) {
    return <div>Failed to load accounts: {error.message}</div>;
  }
  return (
    <div>
      <h1>Accounts</h1>

      {accounts?.map((account) => (
        <div key={account.id}>
          <p>Account: {account.accountNumber}</p>
          <p>Type: {account.accountType}</p>
          <p>
            Balance: {account.currency} {account.balance}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AccountPage;
