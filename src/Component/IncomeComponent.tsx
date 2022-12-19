import React, { Component, MouseEvent } from 'react';
import { useState } from 'react';
import Expense from './ExpenseComponent';
import Balance from './BalanceComponent';

const Income = () => {
    const [income, setIncome] = useState('');
    const [amount, setAmount] = useState('');    
    const [date, setDate] = useState('');
    const [message, setMessage] = useState<string[]>([])
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let dateObj = new Date(date);
        setMessage(`${income}: ${amount}EUR on ${dateObj.toDateString()}`);
        setIncome('');
        setAmount('');
        setDate('');
        

    }
    return(
        <>
        <div>
            <form onSubmit={e => onSubmit(e)}>
                <label htmlFor = "income_source">Income Source</label><br/>
                <input id="income" name="income" type="text" value={income} onChange={e => setIncome(e.target.value)} /><br/>
                <label htmlFor = "amount">Amount of Income</label><br/>
                <input id="amount" name="amount" type="text" value={amount} onChange={e => setAmount(e.target.value)}/><br/>
                <label htmlFor="income_date">Date of Income</label><br/>
                <input type="date" id="date" name="date" value={date}
                 min="2022-01-01" max="2024-12-31" onChange={e => setDate(e.target.value)}></input><br/>
                <button type = "submit">Add Income</button>
                <ul className="list-unstyled">
                    {message.map((messages:string) => {
                        return (
                            <li>{messages}</li>                    
                            );
                        })
                    }
                </ul>
            </form>
        </div>
        </>
    )

}

export default Income;