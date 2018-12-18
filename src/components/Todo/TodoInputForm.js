import React from 'react';
import PropTypes from 'prop-types';

function TodoInputForm(props) {
  const { onFormSubmit, onInputChange, text } = props;
  return (
    <form onSubmit={event => onFormSubmit(event)} className="todo-form">
      <input
        type="text"
        value={text}
        name="todo"
        placeholder="New task ..."
        className="todo-input"
        onChange={event => onInputChange(event)}
      />
      <input type="submit" name="add-todo" value="Add" className="btn-add-todo" />
    </form>
  );
}
TodoInputForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
export default TodoInputForm;
