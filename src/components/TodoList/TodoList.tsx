import React from 'react';

import { todo } from '../../types/types';

interface Props {
    todos: todo[];
}

const TodoList : React.FC<Props> = ({todos}) => {
    return (
        <ul>
            {todos.map( (todo : todo) => {
                return <li key={todo.id}>{todo.text}</li>
            })}
        </ul>
    )
}

export default TodoList;