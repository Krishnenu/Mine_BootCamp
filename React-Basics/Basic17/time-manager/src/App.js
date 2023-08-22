
import TimerDisplay from "./components/TimerDisplay";
import TimerForm from "./components/CreateTimerForm";
import TimerContainer from "./containers/TImerContainers";
import AddWidget from "./components/AddWidget";
import "./App.css"
import { useState } from "react";

function App() {
  const [openTimeForm,toggleOpenTimerForm]=useState(false);
  const [timerList,setTimersList]=useState([]);
  const [isEditMode,setIsEditMode]=useState(false);
  const [editedIndex,setEditedIndex]=useState(-1);

  const addTimer=(name,duration)=>{
    const timerObj={
      "timerName":name,
      "timerDuration":duration
    };
    setTimersList((prevTimerList)=>[...prevTimerList,timerObj]);
  }

  const removeTimer=(index)=>{
     setTimersList((prevTimerList)=>(prevTimerList.filter((item,i)=>index!==i)));
  }

  const onUpdateHandler=(name,duration,index)=>{
    const timerObj={
      "timerName":name,
      "timerDuration":duration
    }
    const timerListCopy = [...timerList];
      timerListCopy[index]=timerObj;
      setTimersList(timerListCopy);
  }

  const onEditOfTimer = (index) => {
    setIsEditMode(true); 
    toggleOpenTimerForm(true);
    setEditedIndex(index);
  }
  console.log(openTimeForm);
  console.log(timerList);
  console.log(isEditMode);
  console.log(editedIndex);
  
  return (
    <>
    <AddWidget adddWidgetHandler={()=>{toggleOpenTimerForm(!openTimeForm)}}/>

    <TimerForm showForm={openTimeForm}
    onCloseForm={()=>{toggleOpenTimerForm(false)}}
    onCreateHandler={addTimer}
    editData={null}
    />
    {isEditMode? <TimerForm
    showForm={openTimeForm}
    onCloseForm={()=>{toggleOpenTimerForm(false);setIsEditMode(false);setEditedIndex(-1)}}
    onUpdateHandler = {onUpdateHandler}
    editData={timerList[editedIndex]}
    editedIndex={editedIndex}/>
    :<></>
  }
    {timerList.map((timer,index)=>{
        return (<TimerContainer
          key={index}
          index={index}
          timerName={timer.timerName} 
          timerDuration={timer.timerDuration}
          deleteTimerHandler={removeTimer}
          onEditOfTimer={onEditOfTimer}
          />);
      })}
    </>
  );
}

export default App;



// planning 1`````````````````````````````````
// static model development 
// decide props and state
// development
// testing


