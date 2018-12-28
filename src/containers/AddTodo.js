import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dBConnection from '../components/indexedDB';
import { updateInput, addTodo } from '../actions';

const dbPromise = dBConnection();
function AddTodo(props) {
  const { id, text, inputChange, submitForm } = props;
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!text.trim()) {
          return;
        }
        submitForm(text);
        // add todo to indexedDB
        dbPromise.then(db => {
          const tx = db.transaction('todoStore', 'readwrite');
          const store = tx.objectStore('todoStore');
          store.add({ id, text, completed: false });
          return tx.complete;
        });
      }}
      className="todo-form"
    >
      <input
        type="text"
        value={text}
        name="todo"
        id="add-todo"
        placeholder="New task ..."
        className="todo-input"
        aria-label="add new task"
        onChange={event => inputChange(event.target.value)}
      />
      <input type="submit" name="add-todo" value="Add" className="btn-add-todo" />
    </form>
  );
}

AddTodo.propTypes = {
  id: PropTypes.number.isRequired,
  submitForm: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
function mapStateToProps(state) {
  return { id: state.todo.nextTodoId, text: state.todo.text };
}
const mapDispatchToProps = dispatch => ({
  inputChange: text => dispatch(updateInput(text)),
  submitForm: todo => dispatch(addTodo(todo)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
