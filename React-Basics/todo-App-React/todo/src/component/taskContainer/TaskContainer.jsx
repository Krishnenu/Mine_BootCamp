import { useState } from "react";

const TaskContainer=({item,removeItem,id,editItemT})=>{
    
    return (
        <>
         <div>
           <input type="text" value={item}/>
           <button type="submit" onClick={()=>editItemT(id)}>Edit</button>
           <button type="submit" onClick={()=>removeItem(id)}>Del</button>       
        </div>
        </>       
    )
}

export default TaskContainer;