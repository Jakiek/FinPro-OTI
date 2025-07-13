import React from 'react'

function ClearButton({ stats, todos, setTodos }) {
  const handleClearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  if (stats.completed === 0) {
    return null; 
  }

  return (
    <div className="text-center mt-4">
      <button onClick={handleClearCompleted} className="btn btn-outline btn-error">
        Clear Completed Tasks ({stats.completed})
      </button>
    </div>
  );
}
export default ClearButton