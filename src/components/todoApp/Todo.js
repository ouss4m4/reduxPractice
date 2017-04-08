import React from 'react';

export const Todo = ({ onToggle,onRemove, completed, text }) => (
    <span>
        <li onClick={onToggle} 
            style={{
            textDecoration: completed ? 'line-through' : 'none'
            }}>
            {text} 
        </li>
        <span onClick={onRemove} > X </span>
    </span>
)