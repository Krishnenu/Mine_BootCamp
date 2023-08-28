import './timerDisplay.css'
import {useTimer} from "../../hooks/useTimer"

const TimerDisplay=({timerVal})=>{

    const time = useTimer(timerVal);
    
    return <div className="timer">
       <p>
       {time===0?<span>OOP's Times Up</span>:<span>{time}</span>}
       </p>
    </div>
}

export default TimerDisplay;