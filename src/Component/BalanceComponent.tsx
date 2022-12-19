import React, { FC, ReactElement } from 'react';
import { useState } from 'react';

type Types1 = {
    income_amount?: number;
    expense_source?: number;
    balance_amount?: number;
}
const Balance: FC<Types1>= (props): ReactElement => {
    // const {income_amount, expense_source} = props;
    // const [balance_amount, setAmount] = useState(0);
    let balance_amount;
    if(props.income_amount && props.expense_source){
        // (props.income_amount-props.expense_source)
        balance_amount = props.income_amount-props.expense_source
    }
        
    //     return ( <div>{balance_amount}</div> )
    return(
        <>
        <div>
        <form>
            <label htmlFor = "balance">Current Balance</label><br/>
            <label htmlFor = "income-amount">Transfer to Saving Account:</label><br/>
            <input type="text" id="savings" name="savings"></input><br/>
            <button type = "submit">Transfer</button>
            <h4>Current Balance:{balance_amount}</h4>
        </form>
        </div>
        </>
    )

}

export default Balance;