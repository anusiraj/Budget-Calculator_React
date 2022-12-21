export interface IncomeProps {
    addIncome: number
    updateIncome:number
    incomeList: IncomeType[]
    value: IncomeType[]
    incomes: IncomeType[]
    balance: number
}
export interface IncomeType {
    income : string
    amount: number
    date: string
    id: string
}