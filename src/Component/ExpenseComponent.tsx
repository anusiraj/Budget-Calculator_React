import { useState } from 'react';
import Balance from './BalanceComponent';

const Expense = ({addExpense}:any) => {
  const [value, setValue] = useState({
    expense: "",
    amount: "",
    date: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setValue({ ...value, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    addExpense(value);
    setValue({ expense: "", amount: "", date: "" });
  };
    return(
      <div className="form-container">
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label htmlFor = "expense_source">Expense Source</label><br/>
          <input
            type="text"
            name="expense"
            value={value.expense}
            onChange={(event) => handleChange(event)}
          />
        </div>
        <div>
          <label htmlFor = "amount">Amount of Expense</label><br/>
          <input
            type="text"
            name="amount"
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
          <button>Add Expense</button>
        </div>
      </form>
    </div>
    )

}

export default Expense;