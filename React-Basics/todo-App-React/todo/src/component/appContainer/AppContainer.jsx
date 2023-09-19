import { useState } from "react";
import AddTask from "../addTask/AddTask";
import TaskContainer from "../taskContainer/TaskContainer";

const AppContainer = () => {
  const [addValue, setAddValue] = useState([]);
  
  const takeInputData = (value) => {
    if(value===""){
      return;
    }
    setAddValue([...addValue, { "val": value, id: Date.now() }]);
  };

  const removeItem = (id) => {
    setAddValue(addValue.filter((item)=>item.id!==id))
  };
  const editItem=(item,id)=>{
    // addValue.map((item)=>{
    //   if(item.id===id){
    //     setAddValue([...addValue,{"val":val,id:id}]);
    //   }
    // })
    console.log(item+id);
  }
  return (
    <div>
      <AddTask inputValue={takeInputData} />
      {/* <TaskContainer item={addValue}/> */}
      {addValue.map((val,index) => {
        return (
          <TaskContainer item={val.val} key={index} id={val.id} removeItem={removeItem} editItemHandler={editItem}/>
        );
      })}
    </div>
  );
};

export default AppContainer;
