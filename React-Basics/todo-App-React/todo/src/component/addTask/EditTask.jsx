import { useState } from "react";

const EditTask=({editedValue,item,id})=>{
    const [input,setInput]=useState("");
    const takeInputHandler=(event)=>{
        setInput(event.target.value);
    }
    const submiSavetHandler=()=>{
        editedValue(input);
        setInput("");
    }
    return (
        <div>
            <input type="text" value={item} placeholder='Edit your Task' onChange={takeInputHandler}/>
            <button onClick={submiSavetHandler(id,input)}>Save</button>
        </div>
    )
}

export default EditTask;