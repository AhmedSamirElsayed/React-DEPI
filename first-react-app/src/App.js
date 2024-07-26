import "./App.css";
import Task1 from "./component/Task1";
import Task2 from "./component/Task2";
import Task3 from "./component/Task3";
import Task4 from "./component/Task4";

const reactQuestionsAndAnswer = [
  {
    id: 1,
    question: "What is the purpose of using JSX in React?",
    answer: "JSX stands for JavaScript XML. .",
  },
  {
    id: 2,
    question: "How do you create a React component?",
    answer: "React components can be created as either function components .",
  },
  {
    id: 3,
    question: "What is the difference between state and props in React?",
    answer:
      "Props are read-only and are used to pass data from one component to another.",
  },
  {
    id: 4,
    question: "How does the virtual DOM work in React?",
    answer: "The virtual DOM is a lightweight copy of the real DOM.",
  },
  {
    id: 5,
    question: "What are React hooks and why are they used?",
    answer: "React hooks are functions .",
  },
  {
    id: 6,
    question: "How can you optimize the performance of a React application?",
    answer:
      "Performance in a React application can be optimized by using techniques such as code splitting, lazy loading.",
  },
];

function App() {
  return (
    <>
      <Task1 />

      <Task2 />

      <Task3 arrQA={reactQuestionsAndAnswer} />

      <h1 style={{ margin: "50px 0", color: "red", textAlign: "center" }}>
        Task To Do App
      </h1>
      <Task4 />
    </>
  );
}

export default App;
