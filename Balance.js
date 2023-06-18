// Balance.js
import React, { useContext } from 'react';
import BalanceContext from './BalanceContext';

function Balance() {
  const { balance } = useContext(BalanceContext);

  return (
    <h1>Balance: ${balance}</h1>
  )
}

export default Balance;
