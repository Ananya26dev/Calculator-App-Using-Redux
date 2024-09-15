import React, { useState } from "react";
import "./Calculator.css";
import { useSelector, useDispatch } from "react-redux";
import { add, subtract, multiply, divide, clear } from "./../Redux/Action";
const Calculator = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator.result);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const handleAdd = () => {
    dispatch(add(Number(value1), Number(value2)));
    setValue1("");
    setValue2("");
  };
  const handleSubtract = () => {
    dispatch(subtract(Number(value1), Number(value2)));
    setValue1("");
    setValue2("");
  };
  const handleMultiply = () => {
    dispatch(multiply(Number(value1), Number(value2)));
    setValue1("");
    setValue2("");
  };
  const handleDivide = () => {
    dispatch(divide(Number(value1), Number(value2)));
    setValue1("");
    setValue2("");
  };
  const handleClear = () => {
    dispatch(clear());
    setValue1("");
    setValue2("");
  };
  return (
    <>
      <div className="container-fluid p-3">
        <h1>Redux Calculator</h1>
        <div className="calculator">
          <input
            type="number"
            placeholder="Enter Number 1"
            min={1}
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Number 2"
            min={1}
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          />
          <div className="buttons">
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSubtract}>Subtract</button>
            <button onClick={handleMultiply}>Multiplication</button>
            <button onClick={handleDivide}>Divison</button>
            <button onClick={handleClear}>Clear</button>
          </div>
          <h2>Result: {result}</h2>
        </div>
      </div>
    </>
  );
};

export default Calculator;
