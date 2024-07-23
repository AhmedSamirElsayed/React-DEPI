import React, { useState } from "react";

const MyContainer = function ({ arrQA }) {
  const [value, setValue] = useState(null);

  const changeColorAndValue = function (idOfEle) {
    setValue(idOfEle); //make update for stat
  };

  const arrayQA = arrQA.map(({ question, answer, id }, index) => (
    <div
      id="myDiv"
      className={id === value ? "active" : ""}
      key={index}
      onClick={() => {
        changeColorAndValue(id);
      }}
    >
      <h3>{id === value ? answer : question}</h3>
    </div>
  ));

  return <div className="parentDiv">{arrayQA}</div>;
};

export default MyContainer;
