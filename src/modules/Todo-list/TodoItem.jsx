import React from "react";
import { Trash2 } from "lucide-react"; // Assuming you use lucide-react for icons

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  // Format the creation date, assuming `todo.createdAt` is a Date object or valid date string
  const formattedDate = new Date(todo.createdAt).toLocaleString("en-US", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="card bg-base-200 shadow">
      <div className="card-body p-4 flex-row items-center justify-between">
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <div>
            <p className={todo.completed ? "line-through text-base-content/60" : ""}>
              {todo.text}
            </p>
            <p className="text-xs text-base-content/50">
              Created: {formattedDate}
            </p>
          </div>
        </div>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="btn btn-ghost btn-square btn-sm"
        >
          <Trash2 className="h-4 w-4 text-error" />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;