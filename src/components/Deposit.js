import React, { useState, useContext } from 'react'; // Added useContext import
import 'bootstrap/dist/css/bootstrap.min.css';
import { BalanceContext } from './BalanceContext'; // Importing BalanceContext

const Deposit = () => {
  const { balance, deposit } = useContext(BalanceContext); // Use deposit and balance from BalanceContext
  const [depositAmount, setDepositAmount] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDeposit = () => {
    if (isNaN(depositAmount)) {
      setErrorMessage('Please enter a valid number.');
    } else if (Number(depositAmount) < 0) {
      setErrorMessage('Deposit amount cannot be negative.');
    } else {
      deposit(depositAmount); // Use deposit function from BalanceContext
      setSuccessMessage('Deposit received successfully.');
      setDepositAmount('');
    }
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Deposit</h5>
          <p className="card-text">Balance: ${balance}</p>
          {successMessage && (
            <div className="alert alert-success" role="alert">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          <form>
            <div className="form-group">
              <label htmlFor="depositAmount">Deposit Amount</label>
                <input
                    type="number"
                    className="form-control"
                    id="depositAmount"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    onKeyPress={(e) => {
                      if (!/[0-9]/.test(e.key)) {
                        e.preventDefault();
                        alert('Please enter a valid number.');
                      }
                    }}
                  />

            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleDeposit}
              disabled={!depositAmount}
            >
              Deposit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Deposit;