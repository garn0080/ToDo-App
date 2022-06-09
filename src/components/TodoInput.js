import React, { useState } from "react";
import "./todoInput.css";

function TodoInput({ setInput, input, setTaskList, taskList }) {
  let handleChange = (ev) => {
    setInput(ev.target.value);
  };

  let handleSubmit = (ev) => {
    ev.preventDefault();
    setTaskList([
      { text: input, completed: false, id: Math.random() * 1000 },
      ...taskList
    ]);

    setInput("");
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
