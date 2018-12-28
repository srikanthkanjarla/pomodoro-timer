import { connect } from 'react-redux';
import Todo from '../components/Todo/Todo';
import { syncTodosDB } from '../actions';

// get all todo tasks from IndexedDB and store in redux store
const mapDispatchToProps = dispatch => ({
  syncStoreWithIDB: (id, todos) => dispatch(syncTodosDB(id, todos)),
});

export default connect(
  null,
  mapDispatchToProps
)(Todo);
