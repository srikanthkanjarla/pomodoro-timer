import React from 'react';
import PropTypes from 'prop-types';
import dBConnection from '../indexedDB';
import AddTodo from '../../containers/AddTodo';
import TodoFilter from '../../containers/TodoFilter';
import VisibleTodoList from '../../containers/VisibleTodoList';
import ShowNotifications from '../../containers/ShowNotifications';
import './todo.css';

class Todo extends React.Component {
  componentDidMount() {
    const { syncStoreWithIDB, setNotifications } = this.props;
    // get all todo tasks from IndexedDB and store in redux store
    this.dbPromise = dBConnection();
    // retrieve todos from indexedDB
    this.dbPromise
      .then(db => {
        const tx = db.transaction('todoStore', 'readonly');
        const store = tx.objectStore('todoStore');
        return store.getAll();
      })
      // dispatch an action to update redux store with indexedDB data
      .then(data => {
        const id = data.length ? data[data.length - 1].id + 1 : 0;
        syncStoreWithIDB(id, data);
        return data.length;
      })
      // display Notification message
      .then(tasksCount => {
        const msg = tasksCount ? 'Tasks loaded from IndexedDB' : 'No Tasks availabe in DB';
        setNotifications(msg);
      });
  }

  render() {
    return (
      <div className="todo-container">
        <ShowNotifications />
        <h1 className="todo-title">To-Do</h1>
        <AddTodo />
        <TodoFilter />
        <VisibleTodoList />
      </div>
    );
  }
}
Todo.propTypes = {
  syncStoreWithIDB: PropTypes.func.isRequired,
  setNotifications: PropTypes.func.isRequired,
};
export default Todo;
