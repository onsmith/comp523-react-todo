import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './Title';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    'Get milk',
    'Get eggs',
    'Get bread',
  ]);

  return (
    <div className="App">
      <Title />
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
