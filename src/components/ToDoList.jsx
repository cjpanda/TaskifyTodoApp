import ToDoItem from "./ToDoItem";

const ToDoList = ({ todos, onChangeToDo, onDeleteToDo }) => {
  let completedTasks = 0;
  todos.map((todo) => {
    if (todo.done) {
      completedTasks++;
    }
    return completedTasks;
  });
  return (
    <>
      <div className="task-list">
        {todos.length === 0 ? (
          <h4 className="no-task">No Tasks</h4>
        ) : (
          <h4 className="task-update">
            {completedTasks} completed {completedTasks === 1 ? "task" : "tasks"}{" "}
            out of {todos.length} {todos.length === 1 ? "task" : "tasks"} in
            total
          </h4>
        )}
        <ol>
          {todos.map((todo) => (
            <li key={todo.id}>
              <ToDoItem
                todo={todo}
                onChange={onChangeToDo}
                onDelete={onDeleteToDo}
              />
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default ToDoList;
