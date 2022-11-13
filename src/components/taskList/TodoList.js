// import { useState } from "react";
import "./todoList.css";
import Todo from "../todo/Todo";
// import { useEffect } from "react";

function TodoList({ todoList, setTodoList, setCompleted, completed }) {
  // DISPLAY ALL TASKS
  let allTodos = todoList.map((todo) => (
    <Todo
      key={todo.id}
      todoList={todoList}
      setTodoList={setTodoList}
      todo={todo}
      setCompleted={setCompleted}
      completed={completed}
    />
  ));


  // DISPLAY COMPLETED TASKS
  let completedTodos = () => {
    
    // setCompleted(
    //   todoList.map((todo) => {
    //     if (todo.completed === true) {
    //       return todo;
    //     }
    //     return null;
    //   }
    //   )
    // );
   
  };

  return (
    <div>
      <div className="list">
        <div className="todoContainer">
          {todoList.length !== 0 ? (
            <ul>{allTodos}</ul>
          ) : (
            <p className="listEmpty">Todo list empty!</p>
          )}
        </div>
      </div>
      <div className="footer">
        <p>{todoList.length} items left</p>
        <div className="filters">
          <p className="activeTab">All</p>
          <p>Active</p>
          <p onClick={completedTodos}>Completed</p>
        </div>
        <p className="clear">Clear Completed</p>
      </div>
    </div>
  );
}

export default TodoList;
