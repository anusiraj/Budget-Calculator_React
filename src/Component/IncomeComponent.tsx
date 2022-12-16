const Income = () => {
    return(
        <>
        <div>
            <form>
                <label htmlFor = "income_source">Income Source</label><br/>
                <input id="income" name="income" type="text" /><br/>
                <label htmlFor = "income-amount">Amount of Income</label><br/>
                <input id="amount" name="amount" type="text" /><br/>
                <label htmlFor="income_date">Date of Income</label><br/>
                <input type="date" id="date" name="date" value="2022-12-17" min="2022-01-01" max="2024-12-31"></input><br/>
                <button type = "submit">Add Income</button>
            </form>
        </div>
        </>
    )

}

export default Income;