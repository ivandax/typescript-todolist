import { todoAction } from '../types/types';

let nextTodoId = 0;

export const addTodo = (text:string) : todoAction => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})