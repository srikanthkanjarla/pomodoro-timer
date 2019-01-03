import { connect } from 'react-redux';
import Todo from '../components/Todo/Todo';
import { syncTodosDB, setNotifications } from '../actions';

// get all todo tasks from IndexedDB and store in redux store
const mapStateToProps = state => ({
  notifications: state.todo.notifications,
});
const mapDispatchToProps = dispatch => ({
  syncStoreWithIDB: (id, todos) => dispatch(syncTodosDB(id, todos)),
  setNotifications: (text, status) => dispatch(setNotifications(text, status)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
