import { useReducer } from "react";
import "./styles.css";

const intialState = {
  count: 0
};

//Note we are not mutating original State that is not stanadard Practice
const reducer = (state, action) => {
  if (action.type == "Increment") {
    return { count: state.count + 1 };
  } else if (action.type == "Decrement") {
    return { count: state.count - 1 };
  }
};

export default function App() {
  const [state, disPatch] = useReducer(reducer, intialState);
  return (
    <div className="App">
      {state.count}
      <button
        onClick={() => {
          disPatch({ type: "Increment" });
        }}
      >
        Inc
      </button>
      <button
        onClick={() => {
          disPatch({ type: "Decrement" });
        }}
      >
        Dec
      </button>
    </div>
  );
}
