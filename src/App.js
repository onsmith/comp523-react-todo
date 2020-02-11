import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Title />
      <TodoForm setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
