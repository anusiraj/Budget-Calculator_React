import { ExpenseProps, ExpenseType } from "../types/Expense"

const ExpenseList = ({expenseList}:ExpenseProps) => {
    return(
        <>
        <div>
            {expenseList.map((expenses:ExpenseType) => (
                <div className="card" key={expenses.id}>
                <li>{`${expenses.expense}: ${expenses.amount}EUR on ${new Date(expenses.date).toDateString()}`}</li>
                </div>
            ))}
        </div>
        </>
    )
}
export default ExpenseList