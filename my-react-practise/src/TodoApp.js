import React, { useState, useCallback, useMemo } from 'react';
import './TodoApp.css'; // Import your CSS file

export const TodoApp=()=> {
  // State to store to-do items
  const [todos, setTodos] = useState([]);

  // Function to add a new to-do item
  const addTodo = useCallback((text) => {
    setTodos((prevTodos) => [...prevTodos, { text, completed: false }]);
  }, []);

  // Function to delete a to-do item
  const deleteTodo = useCallback((index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }, []);

  // Function to toggle the completed state of a to-do item
  const toggleCompleted = useCallback((index) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => (i === index ? { ...todo, completed: !todo.completed } : todo))
    );
  }, []);

  // Function to edit a to-do item
  const editTodo = useCallback((index, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo, i) => (i === index ? { ...todo, text: newText } : todo))
    );
  }, []);

  // Use useMemo to optimize rendering of to-do list
  const renderedTodos = useMemo(() => {
    return todos.map((todo, index) => (
      <li key={index}>
        {/* <input type="checkbox" checked={todo.completed} onChange={() => toggleCompleted(index)} /> */}
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
        <button onClick={() => editTodo(index, prompt('Edit Todo:'))} className="edit">Edit</button>
        <button onClick={() => deleteTodo(index)} className="delete">Delete</button>
      </li>
    ));
  }, [todos, toggleCompleted, editTodo, deleteTodo]);

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>
      <input type="text" placeholder="Add a new todo..." onKeyDown={(e) => { if (e.key === 'Enter') addTodo(e.target.value); e.target.value = ''; }} />
      <ul>{renderedTodos}</ul>
    </div>
  );
}

export default TodoApp;
