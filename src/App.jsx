import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    setResult(firstNumber + secondNumber);
  }, [firstNumber, secondNumber]);

  return (
    <>
      <input
        type="number"
        id="first-number"
        onChange={(e) => setFirstNumber(e.target.value)}
      />
      +
      <input
        type="number"
        id="second-number"
        onChange={(e) => setSecondNumber(e.target.value)}
      />{" "}
      = {result}
    </>
  );
}

export default App;
