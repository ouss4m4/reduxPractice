import React from 'react';
import {Todo} from './Todo';
import './list.css'
const TodoList = ({ todos, dispatch }) => (
  <div className="list">
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
  </div>
)

export default TodoList;