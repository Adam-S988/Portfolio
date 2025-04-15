import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");

  const appendToDisplay = (input) => {
    setDisplay((prev) => prev + input);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  const backspace = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  return (
    <div id="all-area">
      <div id="calculator">
        <input id="display" value={display} readOnly />

        <div id="keys">
          <button onClick={clearDisplay} className="other-btn">
            C
          </button>
          <button onClick={backspace} className="other-btn">
            ⌫
          </button>
          <button onClick={() => appendToDisplay("/100")} className="other-btn">
            %
          </button>
          <button onClick={() => appendToDisplay("/")} className="operator-btn">
            ÷
          </button>

          <button onClick={() => appendToDisplay("7")}>7</button>
          <button onClick={() => appendToDisplay("8")}>8</button>
          <button onClick={() => appendToDisplay("9")}>9</button>
          <button onClick={() => appendToDisplay("*")} className="operator-btn">
            X
          </button>

          <button onClick={() => appendToDisplay("4")}>4</button>
          <button onClick={() => appendToDisplay("5")}>5</button>
          <button onClick={() => appendToDisplay("6")}>6</button>
          <button onClick={() => appendToDisplay("-")} className="operator-btn">
            -
          </button>

          <button onClick={() => appendToDisplay("1")}>1</button>
          <button onClick={() => appendToDisplay("2")}>2</button>
          <button onClick={() => appendToDisplay("3")}>3</button>
          <button onClick={() => appendToDisplay("+")} className="operator-btn">
            +
          </button>
        </div>

        <div id="keys2">
          <button onClick={() => appendToDisplay("0")} className="zero">
            0
          </button>
          <button onClick={() => appendToDisplay(".")}>.</button>
          <button onClick={calculate} className="operator-btn">
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
