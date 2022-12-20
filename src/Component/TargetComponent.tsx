import { useState } from "react";
import { SavingProps } from "../types/Saving";

const Target = ({savings}:SavingProps) => {
    const[target, setTarget] = useState(0)

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setTarget(0)
    }
    return(
        <>
        <div>
        <form onSubmit={e => onSubmit(e)}>
            <label htmlFor = "target">Set Target</label><br/>
            <input id="target" name="target" value = {target} type="text" onChange={(e) =>setTarget(parseInt(e.target.value))} /><br/>
            <button className='button' type = "submit">Reset</button><br/><br/>
        </form>
            <p>Current Saving: {savings}</p>
            <p>Target: {target}</p>
            <p>Progress: {savings/target*100 || 0}%
                <progress id="progress" value={savings} max={target}>0</progress>
            </p>  
                      
        </div>
        </>
    )
}
export default Target;