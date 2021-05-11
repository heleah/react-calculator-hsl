import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const buttons = [
    "-Math.random()",
    "-100",
    "-10",
    "-1",
    "+1",
    "+10",
    "+100",
    "+Math.random()"
  ];

  function calculate(input) {
    console.log(input);
    if (input.includes("Math.random()")) {
      const randomNum = Math.round(Math.random() * 100);
      input[0] === "-"
        ? setCounter(counter - randomNum)
        : setCounter(counter + randomNum);
    } else {
      setCounter(counter + +input);
    }
  }

  function getColor(counter) {
    return `hsl(${counter}, 80%, 40%)`;
  }

  return (
    <div className="App">
      <h1 style={{ color: getColor(counter) }}>{counter}</h1>
      {buttons.map((button) => (
        <button onClick={() => calculate(button)}>{button}</button>
      ))}
      <br />
      <button onClick={() => setCounter(0)}>reset</button>
    </div>
  );
}
