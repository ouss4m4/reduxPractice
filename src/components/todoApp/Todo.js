import React from 'react';

export const Todo = ({ onToggle,onRemove, completed, text }) => (
    <span className="todo">
        <li onClick={onToggle} 
            style={{
            textDecoration: completed ? 'line-through' : 'none'
            }}>
            {text} 
        </li>
        <span onClick={onRemove} className="remove" > X </span>
    </span>
)