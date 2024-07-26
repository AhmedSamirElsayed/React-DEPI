import React, { Fragment, useState } from "react";

////////////////////(Logo component)////////////////////////////
const Logo = function () {
  return <h1 className="logo">FAR AWAY TRIP</h1>;
};
////////////////////(Footer component)////////////////////////////
const Footer = function () {
  return (
    <h1 className="footer">
      Start Adding Some Itemes To Your Packing List ....{" "}
    </h1>
  );
};
///////////////////(Form component)/////////////////////////////
const Form = function ({ addDataItem }) {
  const [values, setValues] = useState({
    select: "",
    description: "",
    packed: false,
  });

  return (
    <form className="form-container">
      <p>What do you need for your trip?</p>
      <select
        value={values.select}
        onChange={(e) => setValues({ ...values, select: e.target.value })}
      >
        <option value="" hidden>
          Select
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={values.description}
        onChange={(e) => setValues({ ...values, description: e.target.value })}
      />
      <button
        onClick={(e) => {
          addDataItem(e, values);
          //   To empty the input value and select value (make it to default)
          setValues({ select: "", description: "", packed: false });
        }}
      >
        ADD
      </button>
    </form>
  );
};
////////////////////(PackingList component)////////////////////////////
const PackingList = function ({ listData, setListData }) {
  // inner function to delete element from list.
  const deleteItem = (clickedIndex) => {
    setListData(listData.filter((_, index) => clickedIndex !== index));
  };

  // inner function to change  element packed from (false to true) and oppesset .
  const toggleHandler = (clickedIndex) => {
    setListData(
      listData.map((item, index) =>
        index === clickedIndex ? { ...item, packed: !item.packed } : item
      )
    );
  };

  ///////// inner component to make  new item in list.///////////
  const Item = function ({ item, clickedIndex }) {
    return (
      <li className="liOfItem">
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => toggleHandler(clickedIndex)}
        />
        <div className={item.packed ? "check" : ""}>
          <span>{item.select}</span>
          <span>{item.description}</span>
        </div>
        <span className="icon" onClick={() => deleteItem(clickedIndex)}>
          &times;
        </span>
      </li>
    );
  };

  //inner function to delete All element from ul.
  const deleteAll = () => {
    //  setlistData(listData.splice());
    setListData([]);
  };

  return (
    <div className="PackingList">
      <ul>
        {listData.map((el, index) => (
          <Item item={el} clickedIndex={index} key={index} />
        ))}
      </ul>
      <div className="btns">
        <select>
          <option value="" hidden>
            Sort By Input Order
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {/* <button onClick={()=>deleteAll(listData)}>Clear List</button> */}
        <button onClick={deleteAll}>Clear List</button>
      </div>
    </div>
  );
};

// ////////////////////(Main Component)//////////////////////////
const ToDoApp = function () {
  // listing state up
  const [data, setData] = useState([]);
  // show data in list
  const addData = (e, values) => {
    e.preventDefault();
    // make push object to array
    setData([...data, values]);
  };

  return (
    <Fragment>
      <Logo />
      <Form addDataItem={addData} />
      <PackingList listData={data} setListData={setData} />
      <Footer />
    </Fragment>
  );
};

export default ToDoApp;
