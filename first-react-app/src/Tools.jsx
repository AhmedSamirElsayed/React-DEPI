import "./Tools.css";

// {
//   /* props without destructuring */
// }

export function Tool1(props) {
  return (
    <div className="App">
      <h1>
        React is a <span>{props.name}</span>
      </h1>
      <p>
        {" "}
        My Favorite Front-End Library Is <span>{props.tool}</span>.
      </p>
      <div className="container">
        <img src="https://reactjs.org/logo-og.png" alt="reactjs" />
      </div>
      <h3>{props.desc}</h3>
      <hr />
    </div>
  );
}

// {
//   /* props with destructuring */
// }

export function Tool2({ name, tool = "Vue", desc }) {
  return (
    <div className="App">
      <h1>
        React is a <span>{name}</span>
      </h1>
      <p>
        {" "}
        My Favorite Front-End Library Is <span>{tool}</span>.
      </p>
      <div className="container">
        <img src="https://reactjs.org/logo-og.png" alt="reactjs" />
      </div>
      <h3>{desc}</h3>
      <hr />
    </div>
  );
}

// // {
// //   /* Default Value */
// // }

// export function Tool3({ name, tool, desc }) {
//   return (
//     <div className="App">
//       <h1>
//         React is a <span>{name}</span>
//       </h1>
//       <p>
//         {" "}
//         My Favorite Front-End Library Is <span>{tool}</span>.
//       </p>
//       <div className="container">
//         <img src="https://reactjs.org/logo-og.png" alt="reactjs" />
//       </div>
//       <h3>{desc}</h3>
//       <hr />
//     </div>
//   );
// }

// Tool3.defaultProps = {
//   name: "Mohamed Ali",
//   tool: "Vue",
//   desc: "hello my friends",
// };
