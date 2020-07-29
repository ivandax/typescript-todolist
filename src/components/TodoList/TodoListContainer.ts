import { connect } from 'react-redux';
import { toggleTodo } from '../../actions';
import TodoList from './TodoList';
import { todoState } from '../../types/types';
//import { AppDispatch } from '../../index';

const mapStateToProps = (state : todoState) => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch : Function ) => ({
    toggleTodo : (id : number) => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);