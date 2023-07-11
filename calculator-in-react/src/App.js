import { useState } from "react";
import "./style.css";

function App() {
  const [result, setResult] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);

  const handleNumberClick = (num) => {
    setDisplayValue((prevValue) => prevValue + num);
  };

  const handleOperatorClick = (operator) => {
    setDisplayValue((prevValue) => prevValue + operator);
  };

  const handleClearClick = () => {
    setDisplayValue("");
    setResult(0);
  };

  const handleEqualClick = () => {
    try {
      const expression = displayValue.replace(/[^-()\d/*+.]/g, "");
      const evalResult = evaluateExpression(expression);
      setResult(evalResult);
    } catch (error) {
      setResult("Error");
    }
  };

  const evaluateExpression = (expression) => {
    let result = 0;
    let operator = "+";
    let operand = "";

    for (let i = 0; i < expression.length; i++) {
      const char = expression[i];

      if (/\d|\./.test(char)) {
        operand += char;
      } else if (/\+|-|\*|\//.test(char)) {
        result = performOperation(result, operator, parseFloat(operand));
        operator = char;
        operand = "";
      } else {
        throw new Error("Invalid character: " + char);
      }
    }

    result = performOperation(result, operator, parseFloat(operand));

    return result;
  };

  const performOperation = (result, operator, operand) => {
    switch (operator) {
      case "+":
        return result + operand;
      case "-":
        return result - operand;
      case "*":
        return result * operand;
      case "/":
        return result / operand;
      default:
        throw new Error("Invalid operator: " + operator);
    }
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{result}</div>
        <div className="current-operand"> {displayValue}</div>
      </div>
      <button className="span-three" onClick={() => handleClearClick()}>
        DEL
      </button>
      <button onClick={() => handleOperatorClick("/")}>/</button>
      <button onClick={() => handleNumberClick("1")}>1</button>
      <button onClick={() => handleNumberClick("2")}>2</button>
      <button onClick={() => handleNumberClick("3")}>3</button>
      <button onClick={() => handleOperatorClick("*")}>*</button>
      <button onClick={() => handleNumberClick("4")}>4</button>
      <button onClick={() => handleNumberClick("5")}>5</button>
      <button onClick={() => handleNumberClick("6")}>6</button>
      <button onClick={() => handleOperatorClick("+")}>+</button>
      <button onClick={() => handleNumberClick("7")}>7</button>
      <button onClick={() => handleNumberClick("8")}>8</button>
      <button onClick={() => handleNumberClick("9")}>9</button>
      <button onClick={() => handleOperatorClick("-")}>-</button>
      <button onClick={() => handleOperatorClick(".")}>.</button>
      <button onClick={() => handleNumberClick("0")}>0</button>
      <button className="span-two" onClick={() => handleEqualClick()}>
        =
      </button>
    </div>
  );
}

export default App;
