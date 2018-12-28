import React from 'react';
import PropTypes from 'prop-types';
import dBConnection from '../indexedDB';
import AddTodo from '../../containers/AddTodo';
import TodoFilter from '../../containers/TodoFilter';
import VisibleTodoList from '../../containers/VisibleTodoList';

import './todo.css';

class Todo extends React.Component {
  componentDidMount() {
    const { syncStoreWithIDB } = this.props;
    // get all todo tasks from IndexedDB and store in redux store
    this.dbPromise = dBConnection();
    // retrieve from indexedDB
    this.dbPromise
      .then(db => {
        const tx = db.transaction('todoStore', 'readonly');
        const store = tx.objectStore('todoStore');
        return store.getAll();
      })
      // dispatch an action to update redux store
      // update
      .then(data => {
        const id = data.length ? data.length : 0;
        syncStoreWithIDB(id, data);
      });
    // });
  }

  render() {
    return (
      <div className="todo-container">
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
};
export default Todo;
