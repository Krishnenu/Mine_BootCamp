// export default (props) => {
//   return (
//     <div className="form-div">
//       <input placeholder="Timer Name"/>
//       <input placeholder="Timer Duration"/>
//       <button className="btn-primary">Create Timer</button>
//     </div>
//   );
// };

import { createPortal } from "react-dom";
import "./timerForm.css";
import { useState } from "react";
export default ({ showForm, onCloseForm, onCreateHandler }) => {
  // try to impliment custom hooks intead of this and make it dry.
  const [name, setName] = useState("");
  const [duration, setDuration] = useState(0);

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const durationHandler = (event) => {
    setDuration(event.target.value);
  };

  const onCreateTimer = () => {
    onCreateHandler(name, duration);
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
        <button className="btn-primary" onClick={onCreateTimer}>
          Create Timer
        </button>
        <button className="btn-primary" onClick={onCloseForm}>
          close
        </button>
      </div>,
      document.body
    )
  );
};
