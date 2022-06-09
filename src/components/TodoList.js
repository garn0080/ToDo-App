import "./todoList.css";

function TodoList({taskList}) {

    let listOfTasks = taskList.map((task) => (
        <li key={task.id}>
          <div className="row">
            <i className="fa-regular fa-circle fa-lg"></i>
            <p>{task.text}</p>
          </div>
          <i id="deleteIcon" className="fa-solid fa-x deleteIcon"></i>
        </li>
    ))

    return (
      <div>
          <div className="list">
            <div className="todoContainer">{taskList.length !== 0 ? <ul>{listOfTasks}</ul> : <p className="listEmpty">Todo list empty!</p>}</div>
          </div>
          <div className="footer">
            <p>{taskList.length} items left</p>
            <div>
              <p>All</p>
              <p>Active</p>
              <p>Completed</p>
            </div>
            <p>Clear Completed</p>
          </div>
      </div>
       
      );
}




export default TodoList;
