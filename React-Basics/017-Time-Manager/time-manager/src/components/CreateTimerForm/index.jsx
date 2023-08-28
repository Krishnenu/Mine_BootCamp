import { createPortal } from "react-dom";
import "./timerForm.css";
import { useState } from "react";
export default ({ showForm, onCloseForm, onCreateHandler,onUpdateHandler, editData,editedIndex}) => {
  // try to impliment custom hooks intead of this and make it dry.
  const [name, setName] = useState(editData?.name ? editData.name : "");
  const [duration, setDuration] = useState(editData?.duration ? editData.duration : "");
  const [error,setError]=useState("");
  const [showError,setShowError]=useState(false);


  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const durationHandler = (event) => {
    setDuration(event.target.value);
  };

  const validateHandler = () => {
    if(name===""){
      setError("Please Provide a Valid Timer Name");
      setShowError(true);
      return;
    }
    if (duration==="" || !/^\d+$/.test(duration)){
      setError("Please Provide a Numeric value in Duration");
      setShowError(true);
      return;
    }
    if(editData){
      onUpdateHandler(name,duration,editedIndex);
    }else{
        onCreateHandler(name, duration);
    }
  //state initialise
  setName("");
  setDuration("");
  onCloseForm();
  };


  return (
    showForm &&
    createPortal(
      <div className="form-div">
        <input placeholder="Timer Name" onChange={nameHandler} value={name} />
        <input
          placeholder="Timer Duration"
          onChange={durationHandler}
          value={duration}
        />
        <button className="btn-primary" onClick={validateHandler}>
          {editData? "Edit Timer": "Create Timer" }
        </button>
        <button className="btn-primary" onClick={onCloseForm}>
          close
        </button>
        {showError?(<h3 className="error">{error}</h3>):<h3 className="error"></h3>}
      </div>,
      document.body
    )
  );
};
