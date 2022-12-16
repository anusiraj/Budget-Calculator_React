import React from 'react';
import logo from './logo.svg';
import './App.css';
import Income from './Component/IncomeComponent'
import Expense from './Component/ExpenseComponent'
import Target from './Component/TargetComponent'
import Balance from './Component/BalanceComponent'

function App() {
  return (
    <>
    <div className = "main">
      <Income />
      <Expense />
      <Target />
      <Balance />
    </div>
    </>
  );
}

export default App;
