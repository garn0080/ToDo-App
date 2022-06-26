import './App.css';
import TodoInput from './components/input/TodoInput';
import TodoList from './components/taskList/TodoList';
import React, { useState } from "react";

function App() {
  // list of tasks
  const [input, setInput] = useState("")
  const [todoList, setTodoList] = useState([]);
  const [completed, setCompleted] = useState([]);

  return (
    <div className="App">
    <div className='banner'></div>
    <div className='container'>
    <TodoInput setInput={setInput} input={input} setTodoList={setTodoList} todoList={todoList}/>
    <TodoList todoList={todoList} setTodoList={setTodoList} setCompleted={setCompleted}/>
    </div>
    </div>
  );
}

export default App;
