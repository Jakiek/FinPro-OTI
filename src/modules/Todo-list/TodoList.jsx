import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ filteredTodos, toggleTodo, deleteTodo }) {
  return (
    <div className="space-y-4 mt-4">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      ) : (
        <div className="text-center p-4 text-base-content/60">
          No tasks here.
        </div>
      )}
    </div>
  );
}

export default TodoList;