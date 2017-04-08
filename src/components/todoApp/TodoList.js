import React from 'react';
import {Todo} from './Todo';

const TodoList = ({ todos, dispatch }) => (
  <ul>
   {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onToggle={() => dispatch.toggleTodo(todo.id) }
        onRemove={() => dispatch.removeTodo(todo.id) }
      />
    )}
  </ul>
)

export default TodoList;