import React from 'react';

import { todo } from '../../types/types';

import Todo from '../Todo';

interface Props {
    todos: todo[];
    toggleTodo: Function;
}

const TodoList : React.FC<Props> = ({todos, toggleTodo}) => {
    return (
        <ul>
            {todos.map( (todo : todo) => {
                return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>
            })}
        </ul>
    )
}

export default TodoList;