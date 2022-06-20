// import { useState } from "react";
import "./todoList.css";

function TodoList({ taskList, setTaskList }) {
  // const [active, setActive] = useState();
  // const [completed, setCompleted] = useState();


  //DELETE A TASK
  let deleteTask = (e) => {
    var idTodoSelected = e.currentTarget.parentElement.id;

    let matchId = taskList.filter((el) => el.id !== parseInt(idTodoSelected)) 
    setTaskList(matchId)
  };

  // DISPLAY ALL TASKS
  let listOfTasks = taskList.map((task) => (
    <li id={task.id} key={task.id}>
      <div className="row">
        <i className="fa-regular fa-circle fa-lg"></i>
        <p>{task.text}</p>
      </div>
      <div onClick={deleteTask}>
        <i id="deleteIcon" className="fa-solid fa-x deleteIcon"></i>
      </div>
    </li>
  ));

  return (
    <div>
      <div className="list">
        <div className="todoContainer">
          {taskList.length !== 0 ? (
            <ul>{listOfTasks}</ul>
          ) : (
            <p className="listEmpty">Todo list empty!</p>
          )}
        </div>
      </div>
      <div className="footer">
        <p>{taskList.length} items left</p>
        <div className="filters">
          <p className="activeTab">All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
        <p className="completed">Clear Completed</p>
      </div>
    </div>
  );
}

export default TodoList;
