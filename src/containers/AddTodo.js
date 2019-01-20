import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import dBConnection from '../components/indexedDB';
import { updateInput, addTodo, setNotifications } from '../actions';

const dbPromise = dBConnection();
function AddTodo(props) {
  const { id, text, inputChange, submitForm, addNotification } = props;
  return (
    <div className="add-todo">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!text.trim()) {
            return;
          }
          // add todo to Redux store
          submitForm(text);
          // add todo to indexedDB
          dbPromise
            .then(db => {
              const tx = db.transaction('todoStore', 'readwrite');
              const store = tx.objectStore('todoStore');
              store.add({ id, text, completed: false });
              return tx.complete;
            })
            .then(() => {
              // add notification message
              addNotification('Added to your list');
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
    </div>
  );
}

AddTodo.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  submitForm: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
  addNotification: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  id: state.todo.nextTodoId,
  text: state.todo.text,
});
const mapDispatchToProps = dispatch => ({
  inputChange: text => dispatch(updateInput(text)),
  submitForm: todo => dispatch(addTodo(todo)),
  addNotification: (text, status) => dispatch(setNotifications(text, status)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
