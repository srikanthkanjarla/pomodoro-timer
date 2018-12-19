import React from 'react';
import PropTypes from 'prop-types';

function TodoItems(props) {
  const { tasks, onToggleTodo } = props;
  return (
    <ul className="todo-items">
      {tasks.length ? (
        tasks.map(task => (
          <li
            key={task.id}
            style={task.completed ? { textDecoration: 'line-through', textDecorationColor: '#a0099f' } : {}}
          >
            <label htmlFor={task.id}>
              <input type="checkbox" id={task.id} checked={task.completed} onChange={() => onToggleTodo(task.id)} />
              <span />
            </label>
            {task.text}
          </li>
        ))
      ) : (
        <p className="no-tasks">No tasks found</p>
      )}
    </ul>
  );
}
TodoItems.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};
export default TodoItems;
