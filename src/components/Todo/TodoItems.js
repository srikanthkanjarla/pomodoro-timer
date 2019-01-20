import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

function TodoItems(props) {
  const { tasks, toggleTodo, deleteTodo, setNotifications } = props;
  return (
    // render all todo items
    <div className="todo-items">
      {tasks.length ? (
        <ul>
          {tasks.map(task => (
            <Task
              key={task.id}
              id={task.id}
              completed={task.completed}
              text={task.text}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              setNotifications={setNotifications}
            />
          ))}
        </ul>
      ) : (
        <p className="no-tasks">Your Task list is empty</p>
      )}
    </div>
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
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setNotifications: PropTypes.func.isRequired,
};
export default TodoItems;
