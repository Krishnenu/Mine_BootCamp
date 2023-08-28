import { useEffect, useState, useRef } from "react";

export const useTimer = (startingTime) => {
  const [time, setTime] = useState(startingTime);
  let timerRef = useRef(null);
  useEffect(() => {
    timerRef = setInterval(() => {
      setTime((prevTime) => (prevTime === 0 ? prevTime : prevTime - 1));
    }, 1000);
    return () => {
      clearInterval(timerRef);
    };
  }, []);
  return time;
};
