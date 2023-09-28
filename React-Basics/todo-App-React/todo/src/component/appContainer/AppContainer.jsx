import { useState } from "react";
import AddTask from "../addTask/AddTask";
import TaskContainer from "../taskContainer/TaskContainer";
import EditTask from "../addTask/EditTask";

const AppContainer = () => {
  const [addValue, setAddValue] = useState([]);
  const [isEditMode,setEditMode]=useState(false);
  const [editedId,setIndex]=useState("");
  
  const takeInputData = (value) => {
    if(value===""){
      return;
    }
    setAddValue([...addValue, { "val": value, id: Date.now() }]);
  };

  const removeItem = (id) => {
    setAddValue(addValue.filter((item)=>item.id!==id))
  };
  
  const editItem=(id,val)=>{
    addValue.map((item)=>{
      if(item.id===id){
        setAddValue([...addValue,{"val":val,id:id}]);
      }
    })
  }
  const editmode=(id)=>{
    setEditMode(true);
    setIndex(id);
  }

  return (
    <div>
      <AddTask inputValue={takeInputData} />
      {addValue.map((val,index) => {
        return (
          val.id==editedId?
            <EditTask item={""} id={val.id} editedValue={editItem}/>
          :
            <TaskContainer item={val.val} key={index} id={val.id} removeItem={removeItem} editItemT={editmode} />
        );
      })}
    </div> 
  );
};

export default AppContainer;
