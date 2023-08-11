
import TimerDisplay from "./components/TimerDisplay";
import TimerForm from "./components/CreateTimerForm";
import TimerContainer from "./containers/TImerContainers";
import AddWidget from "./components/AddWidget";
import "./App.css"
import { useState } from "react";

function App() {
  const [openTimeForm,toggleOpenTimerForm]=useState(false);
  const [timerList,addTimerToList]=useState([]);

  const addTimer=(name,duration)=>{
    const obj={
      "timerName":name,
      "timerDuration":duration
    }
    addTimerToList((priviousList)=>[...priviousList,obj]);
  }

  return (
    <>
    <AddWidget adddWidgetHandler={()=>{toggleOpenTimerForm(!openTimeForm)}}/>
    <TimerForm showForm={openTimeForm}
    onCloseForm={()=>{toggleOpenTimerForm(false)}}
    onCreateHandler={addTimer}
    />
    <TimerContainer />
    </>
  );
}

export default App;



// planning
// static model development 
// decide props and state
// development
// testing


