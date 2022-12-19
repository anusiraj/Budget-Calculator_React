import { useState } from "react";

const Income = ({addIncome}:any) => {

          const [value, setValue] = useState({
            income: "",
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
            addIncome(value);
            setValue({ income: "", amount: "", date: "" });
          };
        
          return (
            <div className="form-container">
              <form onSubmit={e => handleSubmit(e)}>
                <div>
                  <label htmlFor = "income_source">Income Source</label><br/>
                  <input
                    type="text"
                    name="income"
                    value={value.income}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
                <div>
                  <label htmlFor = "amount">Amount of Income</label><br/>
                  <input
                    type="text"
                    name="amount"
                    value={value.amount}
                    onChange={(event) => handleChange(event)}
                  />
                </div>
                <div>
                    <label htmlFor="income_date">Date of Income</label><br/>
                    <input type="date" id="date" name="date" value={value.date}
                    min="2022-01-01" max="2024-12-31" onChange={(event) => handleChange(event)}></input><br/>
                </div>
                <div>
                  <button>Add Income</button>
                </div>
              </form>
            </div>
    )

}
export default Income