const Target = () => {
    return(
        <>
        <div>
            <form>
                <label htmlFor = "income_source">Set Target</label><br/>
                <input id="target" name="target" type="text" /><br/>
                <button type = "submit">Reset</button><br/><br/>
                <label htmlFor="file">Current Saving:</label><br/><br/>
                <label htmlFor="file">Target:</label><br/><br/>
                <label htmlFor="file">Progress:</label>
                <progress id="progress" value="0" max="100">0</progress>     
            </form>          
        </div>
        </>
    )

}

export default Target;