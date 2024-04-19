import { useState  } from "react"
import Input from "./Inputs"

export default function Container(){
    const [ object, setObject ] = useState({
        component1: 10000,
        component2: 300,
        component3: 5.5,
        component4: 12
    })

    function handleChangeObj(component,value){
        setObject((prev) => (
            {
            ...prev,
            [component]: parseFloat(value)
            }
    ))
     console.log(object)
    }


    return <>
        <div id="user-input">
            <Input onSelect={() => handleChangeObj("component1", event.target.value)}>INITIAL INVESTMENT</Input>
            <Input onSelect={() => handleChangeObj("component2", event.target.value)}>EXPECTED RETURN</Input>
            <Input onSelect={() => handleChangeObj("component3", event.target.value)}>ANNUAL INVESTMENT</Input>
            <Input onSelect={() => handleChangeObj("component4", event.target.value)}>Duration</Input>
        </div>
        
        <table>
            {/*todo */}
        </table>
    </>
}