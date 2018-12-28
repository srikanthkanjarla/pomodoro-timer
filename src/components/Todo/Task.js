import React from 'react';
import PropTypes from 'prop-types';
import dBConnection from '../indexedDB';

const dbPromise = dBConnection();
function toggleTodoTask(id, text, completed, toggle) {
  toggle(id);
  dbPromise.then(db => {
    const tx = db.transaction('todoStore', 'readwrite');
    const store = tx.objectStore('todoStore');
    store.put({ id, text, completed: !completed });
    return tx.complete;
  });
}

function Task(props) {
  const { id, text, completed, toggleTodo } = props;

  const style = { textDecoration: 'line-through', textDecorationColor: '#005555' };
  return (
    <li style={completed ? style : null}>
      <label htmlFor={id}>
        <input
          type="checkbox"
          id={id}
          checked={completed}
          onChange={() => toggleTodoTask(id, text, completed, toggleTodo)}
        />
        <span />
      </label>
      {text}
    </li>
  );
}
Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};
export default Task;
