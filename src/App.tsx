import React from 'react';
import logo from './logo.svg';
import './App.css';
import Income from './Component/IncomeComponent'
import Expense from './Component/ExpenseComponent'
import Target from './Component/TargetComponent'
import Balance from './Component/BalanceComponent'
import { useState, useEffect } from "react";
import IncomeList from './Component/IncomeListComponent';
import ExpenseList from './Component/ExpenseListComponent';
import { IncomeProps, IncomeType } from './types/Income';
import { ExpenseProps, ExpenseType } from './types/Expense';

function App() {
  // here we create an array state to store the contact form data
  const [incomes, updateIncome] = useState<IncomeType[]>([]);

  const addIncome = (value:IncomeType) => {
    updateIncome([...incomes, value]);
  };
  const [expense, updateExpense] = useState<ExpenseType[]>([]);

  const addExpense = (value: ExpenseType) => {
    updateExpense([...expense, value]);
  };
  const[balance, setBalance] = useState(0)
  const[savings, setSaving] = useState(0)
  const[target, setTarget] = useState(0)
  useEffect(() => {
    const totalIncomes = incomes.reduce((prev,current) => prev + current.amount, 0)
    const totalExpense = expense.reduce((prev,current) => prev + current.amount, 0)
    
    setBalance(totalIncomes - totalExpense - savings)

  })
  return (
    <>
    <div className = "main">
      <Income addIncome = {addIncome} balance = {balance} />
      <IncomeList incomeList={incomes} addIncome={0} updateIncome={0} value={[]} incomes={[]} balance={0}/>
      <Expense addExpense = {addExpense} balance = {balance} />
      <ExpenseList expenseList={expense} addExpense={0} updateExpense={0} value={[]} expenses={[]} balance={0}/>
      <Target savings = {savings} />
      <Balance balance={balance} setSaving = {setSaving}/>
    </div>
    </>
  );
}

export default App;
