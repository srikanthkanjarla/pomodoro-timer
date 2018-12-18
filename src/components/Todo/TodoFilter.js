import React from 'react';
import PropTypes from 'prop-types';

function TodoFilter(props) {
  const { filter, onFilterTasks } = props;
  return (
    <p className="todo-filter">
      <input
        type="button"
        value="All"
        onClick={() => onFilterTasks('SHOW_ALL')}
        style={filter === 'SHOW_ALL' ? { background: '#a0099f', color: '#ffffff' } : {}}
      />
      <input
        type="button"
        value="Active"
        onClick={() => onFilterTasks('SHOW_ACTIVE')}
        style={filter === 'SHOW_ACTIVE' ? { background: '#a0099f', color: '#ffffff' } : {}}
      />
      <input
        type="button"
        value="Completed"
        onClick={() => onFilterTasks('SHOW_COMPLETED')}
        style={filter === 'SHOW_COMPLETED' ? { background: '#a0099f', color: '#ffffff' } : {}}
      />
    </p>
  );
}
TodoFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterTasks: PropTypes.func.isRequired,
};
export default TodoFilter;
