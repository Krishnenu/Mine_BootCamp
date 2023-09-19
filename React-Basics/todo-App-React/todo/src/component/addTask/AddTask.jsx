import { useState } from "react";

const AddTask=({inputValue})=>{
    const [input,setInput]=useState("");
    const takeInputHandler=(event)=>{
        setInput(event.target.value);
    }
    const submitHandler=()=>{
        inputValue(input);
        setInput("");
    }
    return (
        <div>
            <input type="text" value={input} placeholder='Add your Task' onChange={takeInputHandler}/>
            <button onClick={submitHandler}>Add</button>
        </div>
    )
}

export default AddTask;