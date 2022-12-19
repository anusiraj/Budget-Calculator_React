import { useState } from 'react';
import Balance from './BalanceComponent';

const Expense = () => {
    const [values, setValues] = useState({
        source: "",
        expense: 0,
        date: "",
      });
      interface FormElements extends HTMLFormControlsCollection {
        input: HTMLInputElement
      }
      interface FormElement extends HTMLFormElement {
        readonly elements: FormElements
      }
      const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: 
        event.target.value });
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(values)
        // await callback(); // triggering the callback
    };
    return(
        <>
        <div>
        <form onSubmit={onSubmit}>
            <label htmlFor = "income_source">Expense Source</label><br/>
            <input id="source" name="source" type="text" value={values.source} onChange={onChange} /><br/>
            <label htmlFor = "expense">Amount of Expense</label><br/>
            <input id="expense" name="expense" type="text" value={values.expense} onChange={onChange} /><br/>
            <label htmlFor="income_date">Date of Expense</label><br/>
            <input type="date" id="date" name="date" max="2024-12-31" value={values.date} onChange={onChange}></input><br/>
            <button type = "submit">Add Expense</button>
        </form>
        <ul>
            <li>{values.source}: {values.expense} on {values.date}</li>
        </ul>
        </div>
        <Balance expense_source = {values.expense}/>
        </>
    )

}

export default Expense;