import React from 'react';
import PropTypes from 'prop-types';
import dBConnection from '../indexedDB';

// IndexedDB connection
const dbPromise = dBConnection();
// mark todo item as Done/Undone on onChange event
function toggleTodoTask(id, text, completed, toggleTask, setNotifications) {
  // toggle todo in Redux store
  toggleTask(id);
  // toggle todo in IndexedDB
  dbPromise
    .then(db => {
      const tx = db.transaction('todoStore', 'readwrite');
      const store = tx.objectStore('todoStore');
      store.put({ id, text, completed: !completed });
      return tx.complete;
    })
    // set notifcation message
    .then(() => {
      setNotifications(completed ? 'Marked as Complete' : 'Marked as Active');
    });
}
// delete todo task
function deleteTodoTask(id, deleteTodo, setNotifications) {
  // delete task in redux store
  deleteTodo(id);
  // delete task in indexedDB
  dbPromise
    .then(db => {
      const tx = db.transaction('todoStore', 'readwrite');
      const store = tx.objectStore('todoStore');
      store.delete(id);
      return tx.complete;
    })
    // set notifcation message
    .then(() => {
      setNotifications('Task deleted successfully');
    });
}

function Task(props) {
  const { id, completed, text, toggleTodo, deleteTodo, setNotifications } = props;
  return (
    <li className={`${completed ? `completed-task` : null}`}>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={completed}
          onChange={() => toggleTodoTask(id, text, completed, toggleTodo, setNotifications)}
        />
        <span className="custom-checkbox" />
      </label>
      {text}
      <button type="button" className="remove-btn" onClick={() => deleteTodoTask(id, deleteTodo, setNotifications)}>
        X
      </button>
    </li>
  );
}
Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setNotifications: PropTypes.func.isRequired,
};
export default Task;
