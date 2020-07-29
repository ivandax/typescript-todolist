import { todo, todoActions } from '../types/types';

const initialState : todo[] = [];

const todosReducer = (state=initialState, action : todoActions ) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            console.log("this happens")
            return [...state].map(todo=>
                todo.id === action.id ? {...todo, completed: !todo.completed } : todo
            )
        default:
            return state
    }
}

export default todosReducer;