import React from "react";
import { useState } from "react";

const MyCounter = function () {
  // console.log(useState(1));
  const [count, setCount] = useState(0);
  function handelClick() {
    setCount(count + 1);
  }

  return (
    <div className="counter-container">
      <div className="counter-field">{count}</div>
      <button className="btn" onClick={handelClick}>
        {" "}
        PLUS ONE{" "}
      </button>
    </div>
  );
};

export default MyCounter;
