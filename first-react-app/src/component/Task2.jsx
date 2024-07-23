import React from "react";
import { useState } from "react";

const SliderSteps = function () {
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);
  function handelClickUp() {
    if (count < 6) {
      setCount(count + 1);
    }
  }
  function handelClickDowen() {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  function handelClickClose() {
    setShow(!show);
  }
  return (
    <>
      {show ? (
        <div className="slider-container">
          <div className="numbers">
            <div className={count >= 1 ? "active" : ""}>1</div>
            <div className={count >= 2 ? "active" : ""}>2</div>
            <div className={count >= 3 ? "active" : ""}>3</div>
            <div className={count >= 4 ? "active" : ""}>4</div>
            <div className={count >= 5 ? "active" : ""}>5</div>
            <div className={count >= 6 ? "active" : ""}>6</div>
          </div>
          <div className="message">My Message Her</div>
          <div className="message">{count}</div>
          <div className="btns">
            <div className="btn1" onClick={handelClickDowen}>
              previes
            </div>
            <div className="btn2" onClick={handelClickUp}>
              next
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <button className="btn close" onClick={handelClickClose}>
        &times;
      </button>
    </>
  );
};

export default SliderSteps;
