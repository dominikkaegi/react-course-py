import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

// Make the counter interactive
// When clicking on Add the counter should increase by one.
// When clicking on Subtract the counter should decrease by one.
// The counter should not go below 1. If the count is at 1 and the
// person presses minus, display a warning message.

// Steps
// 1. Add state to the counter
// 2. Change the state manually and make sure that the page displays
//    the desired state
// 3. Add Event handlers to trigger the diferent states.

export default function Counter() {
  let [count, setCount] = useState(1);
  let [error, setError] = useState(null);

  function handleIncrease() {
    setCount(count + 1);
    setError(null);
  }

  function handleDecrease() {
    if (count === 1) {
      setError("Count can not be 0  😡");
      return;
    }
    setCount(count - 1);
  }

  return (
    <div className="center-element">
      <div>
        <div>
          <h1>Counter State: {count}</h1>
        </div>
        <button className="btn" onClick={handleIncrease}>
          <FaPlus /> Add
        </button>
        <button className="btn" onClick={handleDecrease}>
          <FaMinus /> Subract
        </button>
        <div>
          <span className="error-text">{error ? error : ""}</span>
        </div>
      </div>
    </div>
  );
}
