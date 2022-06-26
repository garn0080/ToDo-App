import "./todoInput.css";

function TodoInput({ setInput, input, setTodoList, todoList }) {
  let handleChange = (ev) => {
    setInput(ev.target.value);
  };

  let handleSubmit = (ev) => {
    ev.preventDefault();

    // check if input is empty 1st
    if (input !== "") {
      setTodoList([
        { text: input, completed: false, id: Math.floor(Math.random() * 100) },
        ...todoList
      ]);
  
      setInput("");
    } else{
      console.log("input empty");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>TODO</h1>
      <input
        value={input}
        type="text"
        onChange={handleChange}
        className="input"
        placeholder="Create a new todo..."
      ></input>
    </form>
  );
}

export default TodoInput;
