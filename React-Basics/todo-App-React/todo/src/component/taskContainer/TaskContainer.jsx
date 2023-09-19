import { useState } from "react";

const TaskContainer=({item,removeItem,id,editItemHandler,mode})=>{
    const [edit,setEdit]=useState("");
    
    const changeHandler=(event)=>{
        setEdit(event.target.value);
    }
    
    return (
        <div>
           <input type="text" value={item} onChange={changeHandler}/>
           <button type="submit" onClick={()=>editItemHandler(edit,id)}>Edit</button>
           <button type="submit" onClick={()=>removeItem(id)}>Del</button>       
        </div>
    )
}

export default TaskContainer;