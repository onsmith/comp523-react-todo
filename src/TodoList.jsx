import React from 'react';

export default function TodoList(props) {
  const todos = props.todos;
  const setTodos = props.setTodos;

  const handleDelete = function(i) {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  return (
    <ul>
      {todos.map((t, i) => <Todo
        todo={t}
        key={i}
        i={i}
        onDelete={handleDelete}
      />)}
    </ul>
  );
}


function Todo(props) {
  const todo = props.todo;
  const onDelete = props.onDelete;
  const i = props.i;

  const handleDelete = function() {
    onDelete(i);
  };

  return (
    <li>
      {todo}
      <span onClick={handleDelete}>X</span>
    </li>
  );
}
