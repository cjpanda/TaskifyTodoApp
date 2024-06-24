import { useState } from "react";
import AddToDo from "./AddToDo";
import TodoList from "./ToDoList";
import Logo from "../assets/logo.png";

let nextId = 1;
const initialTodos = [{ id: 0, title: "ToDo Example", done: true }];

const ToDo = () => {
  const [todos, setTodos] = useState(initialTodos);

  //Create
  const addToDo = (title) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  };

  //Update
  const editToDo = (nextTodo) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === nextTodo.id) {
          return nextTodo;
        } else {
          return todo;
        }
      })
    );
  };

  //Delete
  const deleteToDo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id != todoId));
  };

  return (
    <div>
      {/* Header */}
      <div className="header">
        <img src={Logo} alt="logo" width={200} className="logo" />
      </div>

      {/* Body */}
      <div className="app-container">
        <AddToDo onAddToDo={addToDo} />
        <TodoList
          todos={todos}
          onChangeToDo={editToDo}
          onDeleteToDo={deleteToDo}
        />
      </div>
    </div>
  );
};

export default ToDo;
