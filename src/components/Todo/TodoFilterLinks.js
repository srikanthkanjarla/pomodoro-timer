import React from 'react';
import PropTypes from 'prop-types';

function TodoFilterLinks(props) {
  const { filter, setFilter } = props;
  const style = { background: 'var(--ABSOLUTE-ZERO)', color: '#ffffff' };
  return (
    <p className="todo-filter">
      <input
        type="button"
        value="All"
        onClick={() => setFilter('SHOW_ALL')}
        style={filter === 'SHOW_ALL' ? style : null}
      />
      <input
        type="button"
        value="Active"
        onClick={() => setFilter('SHOW_ACTIVE')}
        style={filter === 'SHOW_ACTIVE' ? style : null}
      />
      <input
        type="button"
        value="Completed"
        onClick={() => setFilter('SHOW_COMPLETED')}
        style={filter === 'SHOW_COMPLETED' ? style : null}
      />
    </p>
  );
}
TodoFilterLinks.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
};
export default TodoFilterLinks;
