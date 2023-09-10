import './index.css'
const calBtn = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  "=",
  "."
];

const Calculator = () => {
  return (
    <div>
      {
      calBtn.map((val) => (
        <button class="calBtn" key={val}>{val}</button>
      ))
      }
    </div>
  );
};


export default Calculator;
