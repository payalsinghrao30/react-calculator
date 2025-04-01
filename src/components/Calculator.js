import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [previousInput, setPreviousInput] = useState(null);
  // handle number
  const handleNumber = (num) => {
    setInput(input === "0" ? num : input + num);
  };

  const handleOperator = (op) => {
    setOperator(op);
    setPreviousInput(input);
    setInput("0");
  };

  const calculateResult = () => {
    if (!operator || previousInput === null) return;
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(previousInput) + parseFloat(input);
        break;
      case "-":
        result = parseFloat(previousInput) - parseFloat(input);
        break;
      case "*":
        result = parseFloat(previousInput) * parseFloat(input);
        break;
      case "/":
        result = parseFloat(previousInput) / parseFloat(input);
        break;
      default:
        return;
    }
    setInput(result.toString());
    setOperator(null);
    setPreviousInput(null);
  };

  const clearInput = () => {
    setInput("0");
    setOperator(null);
    setPreviousInput(null);
  };

  return (
    <div className="calculator">
      <div className="display">{input}</div>
      <div className="button-grid">
        <button onClick={clearInput} className="clear">AC</button>
        <button className="negative">+/-</button>
        <button className="percent">%</button>
        <button onClick={() => handleOperator("/")} className="operator">/</button>

        {[7, 8, 9].map(num => (
          <button key={num} onClick={() => handleNumber(num.toString())} className="number">{num}</button>
        ))}
        <button onClick={() => handleOperator("*")} className="operator">*</button>

        {[4, 5, 6].map(num => (
          <button key={num} onClick={() => handleNumber(num.toString())} className="number">{num}</button>
        ))}
        <button onClick={() => handleOperator("-")} className="operator">-</button>

        {[1, 2, 3].map(num => (
          <button key={num} onClick={() => handleNumber(num.toString())} className="number">{num}</button>
        ))}
        <button onClick={() => handleOperator("+")} className="operator">+</button>

        <button onClick={() => handleNumber("0")} className="number zero">0</button>
        <button className="number">.</button>
        <button onClick={calculateResult} className="equal">=</button>
      </div>
    </div>
  );
}
