import { useState } from 'react';

const Expense = ({addExpense, balance}:any) => {
  const [value, setValue] = useState({
    expense: "",
    amount: 0,
    date: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if(event.target.id === 'amount'){
      setValue({...value, [event.target.name]: Number(event.target.value)})
    }
    else {
    setValue({...value, [event.target.name]: event.target.value})
    }
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(balance<value.amount) {
      alert("Not enough balance")
    }
    else{
      addExpense(value);
    }
    setValue({ expense: "", amount: 0, date: "" });
  };
    return(
      <div className="form-container">
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor = "expense_source">Expense Source</label><br/>
          <input
            type="text"
            name="expense"
            id = "expense"
            value={value.expense}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div>
          <label htmlFor = "amount">Amount of Expense</label><br/>
          <input
            type="number"
            name="amount"
            id = "amount"
            value={value.amount}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div>
            <label htmlFor="expense_date">Date of Expense</label><br/>
            <input type="date" id="date" name="date" value={value.date}
            min="2022-01-01" max="2024-12-31" onChange={(event) => handleChange(event)}></input><br/>
        </div>
        <div>
          <button className='button'>Add Expense</button>
        </div>
      </form>
    </div>
    )
}
export default Expense;