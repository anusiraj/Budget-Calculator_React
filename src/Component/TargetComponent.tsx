import { SavingProps } from "../types/Saving";

const Target = ({savings}:SavingProps) => {
    return(
        <>
        <div>
        <form>
                <label htmlFor = "target">Set Target</label><br/>
                <input id="target" name="target" type="text" /><br/>
                <button type = "submit">Reset</button><br/><br/>
                <p>Current Saving: {savings}</p>
                <label htmlFor="file">Target:</label><br/><br/>
                <label htmlFor="file">Progress:</label>
                <progress id="progress" value="0" max="100">0</progress>  
            </form>          
        </div>
        </>
    )

}

export default Target;