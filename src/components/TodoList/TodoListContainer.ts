import { connect } from 'react-redux';
import TodoList from './TodoList';

const mapStateToProps = (state: any) => ({
    todos: state.todos
})

export default connect(mapStateToProps)(TodoList);