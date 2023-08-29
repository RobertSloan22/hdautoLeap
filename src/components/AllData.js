import React from "react"; // Added useContext import
import { UserContext } from "./Context";
import { BalanceContext } from "./BalanceContext"; // Import BalanceContext


function AllData(){
  const userContext = React.useContext(UserContext);
  const balanceContext = React.useContext(BalanceContext); // Get balanceContext

  return (
    <>
    <h5>All Account Data</h5>
    {userContext.users.map((user, index) => (
      <div key={index} className="card mt-4">
        <div className="card-body">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{user.name}</h5>
            <small>{user.email}</small>
          </div>
          <p className="mb-1">Balance: ${balanceContext.balance}</p> {/* Display balance from BalanceContext */}
        </div>
      </div>
    ))}
    <h5>All Transaction Data</h5>
    {balanceContext.transactionHistory.map((transaction, index) => ( // Map through transactionHistory
      <div key={index} className="card mt-4">
        <div className="card-body">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{transaction.type}</h5>
            <small>{transaction.date.toString()}</small>
          </div>
          <p className="mb-1">Amount: ${transaction.amount}</p>
        </div>
      </div>
    ))}
    </>
  );
}

export default AllData;