export interface ExpenseProps {
    addExpense: number
    updateExpense:number
    expenseList: ExpenseType[]
    value: ExpenseType[]
    expenses: ExpenseType[]
    balance: number
}
export interface ExpenseType {
    expense : string
    amount: number
    date: string
    id: string

}