import React, { FC, ReactElement } from 'react';
import { useState } from 'react';

type Types1 = {
    income_amount?: number;
    expense_source?: number;
    balance_amount?: number;
}
const Balance: FC<Types1>= (props): ReactElement => {
    const [transfer, setTransfer] = useState('');
    
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(transfer)
        setTransfer('');
    }
    return(
        <>
        <div>
        <form onSubmit={e => onSubmit(e)}>
            <label htmlFor = "balance">Current Balance</label><br/>
            <label htmlFor = "transfer">Transfer to Saving Account:</label><br/>
            <input type="text" id="transfer" name="transfer" value = {transfer} onChange={e => setTransfer(e.target.value)}></input> 
            <button type = "submit">Transfer</button>
        </form>
        </div>
        </>
    )

}

export default Balance;