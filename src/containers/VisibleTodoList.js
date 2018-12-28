import { connect } from 'react-redux';
import TodoItems from '../components/Todo/TodoItems';
import { toggleTodo } from '../actions';

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_ACTIVE':
      return todos.filter(task => !task.completed);
    case 'SHOW_COMPLETED':
      return todos.filter(task => task.completed);
    default:
      return todos;
  }
}
const mapStateToProps = state => ({
  tasks: getVisibleTodos(state.todo.tasks, state.todo.filter),
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItems);
