import { connect } from 'react-redux';
import TodoFilter from '../components/Todo/TodoFilterLinks';
import { setFilter } from '../actions';

const mapstateToProps = state => ({
  filter: state.todo.filter,
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
});
export default connect(
  mapstateToProps,
  mapDispatchToProps
)(TodoFilter);
