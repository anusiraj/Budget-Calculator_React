import React from 'react';
import logo from './logo.svg';
import './App.css';
import Income from './Component/IncomeComponent'
import Expense from './Component/ExpenseComponent'
import Target from './Component/TargetComponent'
import Balance from './Component/BalanceComponent'
import { useState } from "react";
import IncomeList from './Component/IncomeListComponent';
import ExpenseList from './Component/ExpenseListComponent';

function App() {
  // here we create an array state to store the contact form data
  const [income, updateIncome] = useState([]);

  const addIncome = (value: never) => {
    updateIncome([...income, value]);
  };
  const [expense, updateExpense] = useState([]);

  const addExpense = (value: never) => {
    updateExpense([...expense, value]);
  };
  return (
    <>
    <div className = "main">
      <Income addIncome={addIncome} />
      <Expense addExpense={addExpense} />
      <IncomeList income={income}/>
      <ExpenseList expense={expense}/>
      <Target />
      <Balance/>
    </div>
    </>
  );
}

export default App;
