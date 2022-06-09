import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import React, { useState } from "react";

function App() {
  // list of tasks
  const [input, setInput] = useState("")
  const [taskList, setTaskList] = useState([]);

  return (
    <div className="App">
    <div className='banner'></div>
    <div className='container'>
    <TodoInput setInput={setInput} input={input} setTaskList={setTaskList} taskList={taskList} />
    <TodoList taskList={taskList} />
    </div>
    </div>
  );
}

export default App;
