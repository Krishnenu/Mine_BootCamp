import TimerDisplay from "../../components/TimerDisplay";
import "../../App.css";
import "./timerContainer.css"

const TimerContainer = ({
  timerName,
  timerDuration,
  deleteTimerHandler,
  index,
  onEditOfTimer
}) => {
  return (
    <div className="timer-container">
      <div className="container">
        <h2>{timerName}</h2>
        <TimerDisplay timerVal={timerDuration} />
        <div className="btn-container">
          <button className="btn-primary" onClick={()=>{onEditOfTimer(index)}}>Edit</button>
          <button
            className="btn-primary"
            onClick={() => {
              deleteTimerHandler(index);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TimerContainer;
