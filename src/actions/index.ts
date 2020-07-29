import { ADD, TOGGLE, todoActions } from '../types/types';

let nextTodoId = 0;

export const addTodo = (text:string) : todoActions => ({
    type: ADD,
    id: nextTodoId++,
    text
})

export const toggleTodo = (id:number) : todoActions => ({
    type: TOGGLE,
    id: id
  })