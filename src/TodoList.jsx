import React from 'react';

export default function TodoList(props) {
  const todos = props.todos;

  return (
    <ul>
      {todos.map((t, i) => <Todo todo={t} key={i} />)}
    </ul>
  );
}


function Todo(props) {

}
