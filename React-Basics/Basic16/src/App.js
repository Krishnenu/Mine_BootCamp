import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";

export const Dummy = () => {
  return <h1>Hellow</h1>;
  };

function App({ myName, myCity }) {
  // const {myName}=props;
  const [count, setCount] = useState(0);
  const [name, setName] = useState(myName);
  const OnClickHandler = () => {
    setCount(count + 1);
    setName(name + myCity);
  };
    return (
      <>
        {<h1>{myName + "----------" + myCity}</h1>}
        <h1>{count}</h1>
        <button onClick={OnClickHandler}>Inc</button>
        <h1>{name}</h1>
        <Dummy />
      </>
  );
}

export default App;
