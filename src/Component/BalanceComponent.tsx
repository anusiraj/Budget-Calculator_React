import React, { FC, ReactElement } from 'react';
import { useState } from 'react';
import { BalanceProps } from '../types/Balance';

const Balance = ({balance, setSaving}: BalanceProps) => {
    const [transfer, setTransfer] = useState(0);
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(balance< transfer){
            alert("You do not have enough balance")
        }
        else{
            setSaving((prev) => prev+transfer)
        }
    }
    return(
        <>
        <div>
        <p>Current Balance: {balance}</p>
        <form onSubmit={e => onSubmit(e)}>
            <input type="text" id="transfer" name="transfer" value = {transfer} 
            onChange={e => setTransfer(parseInt(e.target.value))}></input> 
            <button type = "submit">Transfer</button>
        </form>
        </div>
        </>
    )

}

export default Balance;