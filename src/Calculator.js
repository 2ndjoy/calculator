import React, { useState, useEffect } from "react";

function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  const deleteLastDigit = () => {
    setResult(result.slice(0, -1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key >= 0 && e.key <= 9) || e.key === ".") {
        setResult(result.concat(e.key));
      } else if (
        e.key === "+" ||
        e.key === "-" ||
        e.key === "*" ||
        e.key === "/"
      ) {
        setResult(result.concat(e.key));
      } else if (e.key === "Enter") {
        calculate();
      } else if (e.key === "Backspace") {
        deleteLastDigit();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [result]);

  return (
    <div className="calculator flex flex-col items-center justify-center h-screen bg-gray-200">
      <input
        type="text"
        value={result}
        className="text-2xl mb-5 bg-white w-64 text-right p-3 rounded"
      />
      <div className="keypad grid grid-cols-4 gap-5">
        <button
          onClick={clear}
          id="clear"
          className="bg-red-500 text-white p-3 rounded"
        >
          Clear
        </button>
        <button
          onClick={deleteLastDigit}
          id="delete"
          className="bg-red-500 text-white p-3 rounded"
        >
          Delete
        </button>
        <button
          name="/"
          onClick={handleClick}
          className="bg-green-500 text-white p-3 rounded"
        >
          /
        </button>
        <button
          name="7"
          onClick={handleClick}
          className="bg-blue-500 text-white p-3 rounded"
        >
          7
        </button>
        <button
          name="8"
          onClick={handleClick}
          className="bg-blue-500 text-white p-3 rounded"
        >
          8
        </button>
        <button
          name="9"
          onClick={handleClick}
          className="bg-blue-500 text-white p-3 rounded"
        >
          9
        </button>
        <button
          name="*"
          onClick={handleClick}
          className="bg-green-500 text-white p-3 rounded"
        >
          *
        </button>
        <button
          name="4"
          onClick={handleClick}
          className="bg-blue-500 text-white p-3 rounded"
        >
          4
        </button>
        <button
          name="5"
          onClick={handleClick}
          className="bg-blue-500 text-white p-3 rounded"
        >
          5
        </button>
        <button
          name="6"
          onClick={handleClick}
          className="bg-blue-500 text-white p-3 rounded"
        >
          6
        </button>
        <button
          name="-"
          onClick={handleClick}
          className="bg-green-500 text-white p-3 rounded"
        >
          -
        </button>
        <button
          name="1"
          onClick={handleClick}
          className="bg-blue-500 text-white p-3 rounded"
        >
          1
        </button>
        <button
          name="2"
          onClick={handleClick}
          className="bg-blue-500 text-white p-3 rounded"
        >
          2
        </button>
        <button
          name="3"
          onClick={handleClick}
          className="bg-blue-500 text-white p-3 rounded"
        >
          3
        </button>
        <button
          name="+"
          onClick={handleClick}
          className="bg-green-500 text-white p-3 rounded"
        >
          +
        </button>
        <button
          name="0"
          onClick={handleClick}
          className="bg-blue-500 text-white p-3 rounded"
        >
          0
        </button>
        <button
          name="."
          onClick={handleClick}
          className="bg-blue-500 text-white p-3 rounded"
        >
          .
        </button>
        <button
          onClick={calculate}
          id="result"
          className="bg-yellow-500 text-white p-3 rounded"
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
