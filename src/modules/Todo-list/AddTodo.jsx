import React from 'react'
import Container from '../../components/Container'
import { Plus } from 'lucide-react';

function AddTodo({
    newTodo,
    setNewTodo, 
    addTodo,
    handleKeyPress
}) {
  return (
  <Container>
        <div className="card bg-base-200 shadow-lg">
          <div className="card-body">
            <h2 className="card-title mb-4 flex items-center gap-2">
              Add New Task
            </h2>
            <form onSubmit={handleKeyPress} className="space-y-4">
              <div className="flex flex-row items-end justify-between gap-4">
                <div className="form-control flex-grow">
                  <label className="label sr-only">
                    <span className="label-text">Task</span>
                  </label>
                  <div>
                    <input
                      type="text" 
                      placeholder="What needs to be done?" 
                      value={newTodo}
                      onChange={(e) => setNewTodo(e.target.value)}
                      onKeyUp ={handleKeyPress}
                      className="input input-bordered w-full focus:input-primary" 
                    />
                  </div>
                </div>

                <div className="form-control self-end">
                  <label className="label opacity-0">
                    <span className="label-text">Submit</span>
                  </label>
                  <button
                    type="submit" 
                    onClick={addTodo} 
                    className="btn btn-primary w-full md:w-auto"
                    disabled={!newTodo.trim()}
                  >
                    <Plus className="h-4 w-4" />
                    Add Task 
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
    </Container>
  );
}

export default AddTodo