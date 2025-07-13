import React, { useMemo, useState } from 'react'
//import Stats from "./Stats"; //done
//import AddTodo from "./AddTodo"; //done
//import Filter from "./Filter"; //done
//import ClearButton from "./ClearButton"; //done

import { useTodos } from "../../hooks/useTodos";
import HeaderToDo from './HeaderTodo';
import TodoStats from './TodoStats';
import AddTodo from './AddTodo';
import Filter from './Filter';
import ClearButton from './ClearButton';
import TodoList from './TodoList';



function Todo() {

    const {todos, setTodos, addTodo, toggleTodo, deleteTodo } = useTodos();
    const [newTodo, setNewTodo] = useState("");
    const [filter, setFilter] = useState("all");

    const stats = useMemo(() => {
      const total = todos.length;

      const completed = todos.filter((todo) => todo.completed).length;
      
      const active = total - completed;
    
      return { total, completed, active };
    }, [todos]);

    const filteredTodos = useMemo(() => {
        switch (filter) {
          case "active":
            return todos.filter((todo) => !todo.completed);
          case "completed":
            return todos.filter((todo) => todo.completed);
          default:
            return todos;
        }
    }, [todos, filter]);

    const handleAddTodo = () => {
        addTodo(newTodo);
        setNewTodo("");
    };
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
        addTodo();
        }
    };
        return (
    <>

      {/* Stats */}
      <TodoStats
        stats={stats}
      />
      {/* Add Todo */}
      <AddTodo
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={handleAddTodo}
        handleKeyPress={handleKeyPress}
      />
      {/* Filter */}
      <Filter stats={stats} filter={filter} setFilter={setFilter} />
      {/* Todo List */}
      <TodoList
        filteredTodos={filteredTodos}
        filter={filter}
        todos={todos}
        stats={stats}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      {/* Clear Completed Button */}
      <ClearButton stats={stats} todos={todos} setTodos={setTodos} />
    </>
  );
}

export default Todo;