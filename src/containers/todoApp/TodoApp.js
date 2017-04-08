import React from 'react';
import  TodoInput  from '../../components/todoApp/TodoInput'
import VisibleTodos from './VisibleTodos'
import { Footer } from '../../components/todoApp/Footer'

const TodoApp = () => (
    <div className="container">
        <TodoInput />
        <VisibleTodos />
        <Footer />
    </div> 
)
        
export default TodoApp;