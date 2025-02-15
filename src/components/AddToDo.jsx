import { useState } from "react";

const AddToDo = ({ onAddToDo }) => {
  const [title, setTitle] = useState("");
  return (
    <div className="add-todo">
      <div className="input-container">
        <input
          className="add-input"
          placeholder="Add a new task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {title.length === 0 && <small> Type a task to add</small>}
        <button
          className="add-button"
          onClick={() => {
            setTitle("");
            onAddToDo(title);
          }}
          disabled={title.length === 0}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddToDo;
