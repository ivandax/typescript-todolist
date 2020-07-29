export const ADD = 'ADD_TODO'
export const TOGGLE = 'TOGGLE_TODO'

export interface addTodoAction {
    type: typeof ADD;
    id: number;
    text: string;
}

export interface toggleTodoAction {
    type: typeof TOGGLE;
    id: number;
}

export type todoActions = addTodoAction | toggleTodoAction

export interface todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface todoState {
    todos: todo[];
}