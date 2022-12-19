import React from 'react';
import logo from './logo.svg';
import './App.css';
import Income from './Component/IncomeComponent'
import Expense from './Component/ExpenseComponent'
import Target from './Component/TargetComponent'
// import Balance from './Component/BalanceComponent'
// import { getRandomValues } from 'crypto';

function App() {
  return (
    <>
    <div className = "main">
      <Income />
      <Expense />
      <Target />
    </div>
    </>
  );
}

export default App;
