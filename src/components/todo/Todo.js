// import React, { useEffect } from "react";
import "./todo.css";

function Todo({ todoList, setTodoList, todo }) {
  // setCompleted

  //DELETE A TASK
  let deleteTodo = (e) => {
    var idTodoSelected = parseInt(e.currentTarget.parentElement.id);

    // filter creates a new array with the elements that the id doesn't match
    let matchId = todoList.filter((el) => el.id !== idTodoSelected);
    setTodoList(matchId);
  };

  // COMPLETE A TASK
  let completTodo = (e) => {
    let idTodoSelected = parseInt(
      e.currentTarget.parentElement.parentElement.id
    );

    // TOOGLE COMPLETED TRUE OR FALSE
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === idTodoSelected) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  return (
    <li id={todo.id} data-status={todo.completed ? "completed" : "incompleted"}>
      <div className="row">
        <div
          className={`icon ${todo.completed ? "check" : "circle"}`}
          onClick={completTodo}
        ></div>
        {/* <p className={`${todo.completed ? "completed" : "incompleted"}`}>{todo.text}</p> */}
        <p>{todo.text}</p>
      </div>
      <div onClick={deleteTodo}>
        <i id="deleteIcon" className="fa-solid fa-x deleteIcon"></i>
      </div>
    </li>
  );
}

export default Todo;
