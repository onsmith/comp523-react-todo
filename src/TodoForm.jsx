import React, { useState } from 'react';

export default function TodoForm(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const [value, setValue] = useState('');

  const handleFormSubmit = function(e) {
    e.preventDefault();
    const newTodos = [...todos];
    newTodos.push(value);
    setTodos(newTodos);
    setValue('');
  };

  const handleChange = function(e) {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button type="submit">
        +
      </button>
    </form>
  );
}
