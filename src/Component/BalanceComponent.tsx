const Balance = () => {
    return(
        <>
        <div>
        <form>
            <label htmlFor = "balance">Current Balance</label><br/>
            <label htmlFor = "income-amount">Transfer to Saving Account:</label><br/>
            <input type="text" id="savings" name="savings"></input><br/>
            <button type = "submit">Transfer</button>
        </form>
        </div>
        </>
    )

}

export default Balance;