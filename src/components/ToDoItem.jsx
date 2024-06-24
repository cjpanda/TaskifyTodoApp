import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { HiOutlineSaveAs } from "react-icons/hi";
import { AiOutlineDelete } from "react-icons/ai";

const ToDoItem = ({ todo, onChange, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  let todoContent;
  if (isEditing) {
    todoContent = (
      <>
        <div className="todo-input">
          <input
            className="todo-title"
            value={todo.title}
            onChange={(e) => {
              onChange({
                ...todo,
                title: e.target.value,
              });
            }}
          />
        </div>
        <HiOutlineSaveAs
          onClick={() => setIsEditing(false)}
          disabled={todo.title.length === 0}
          className="icon"
        />
      </>
    );
  } else {
    todoContent = (
      <>
        {todo.title}
        <FiEdit onClick={() => setIsEditing(true)} className="icon" />
      </>
    );
  }
  return (
    <div className="todo-container">
      <label className="">
        <input
          className="checkbox"
          type="checkbox"
          checked={todo.done}
          onChange={(e) => {
            onChange({
              ...todo,
              done: e.target.checked,
            });
          }}
        />
        {todoContent}
        <AiOutlineDelete
          className="icon-delete"
          onClick={() => onDelete(todo.id)}
        />
        {todo.title.length === 0 && <small>Task cant be empty.</small>}
      </label>
    </div>
  );
};

export default ToDoItem;
