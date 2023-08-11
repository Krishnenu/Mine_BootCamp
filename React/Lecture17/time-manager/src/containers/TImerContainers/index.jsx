import TimerDisplay from "../../components/TimerDisplay";
import "../../App.css";

const TimerContainer=()=>{
    return (
        <div className="container">
        <TimerDisplay timerDis="12:35 PM"/>
        <button className="btn-primary">Done</button>
        <button className="btn-primary">Delete</button>
        </div>
    );
}

export default TimerContainer;