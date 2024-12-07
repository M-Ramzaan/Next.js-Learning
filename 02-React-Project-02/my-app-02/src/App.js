import Todo from "./Components/Todo";
function App() {
  return (
    <div>
      <h1>My To Do</h1>
      <Todo text="Learning React" />
      <Todo text="Preparing for Exams" />
      <Todo text="Learning at Innovista" />
    </div>
  );
}

export default App;
