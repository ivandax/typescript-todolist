import React from 'react';
import { todo } from '../../types/types';

import './Todo.css';

interface TodoProps {
    todo: todo;
    toggleTodo: Function;
}

const Todo: React.FC<TodoProps> = ({todo, toggleTodo}) => {

    return (
    <li 
    className={todo.completed ? 'complete' : undefined} 
    onClick={()=>{toggleTodo(todo.id)}}
    >
        {todo.text}
    </li>
    )
}

export default Todo;