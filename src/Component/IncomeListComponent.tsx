import { IncomeProps, IncomeType } from "../types/Income"

const IncomeList = ({incomeList}:IncomeProps) => {
    return(
        <>
        <div>
            {incomeList.map((incomes:IncomeType) => (
                <div className="card" key={incomes.id}>
                <li>{`${incomes.income}: ${incomes.amount}EUR on ${new Date(incomes.date).toDateString()}`}</li>
                </div>
            ))}
    </div>
        </>
    )

}
export default IncomeList