import React from 'react';
import dBConnection from '../indexedDB';
import TodoInputForm from './TodoInputForm';
import TodoFilter from './TodoFilter';
import TodoItems from './TodoItems';

import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      text: '',
      tasks: [],
      filter: 'SHOW_ALL',
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFilterTasks = this.handleFilterTasks.bind(this);
    this.handleToggleTask = this.handleToggleTask.bind(this);
    this.getVisibleTasks = this.getVisibleTasks.bind(this);
  }

  componentDidMount() {
    this.dbPromise = dBConnection();
    this.getAllTasksfromDB();
  }

  // filter todo tasks
  getVisibleTasks(filter) {
    const { tasks } = this.state;
    switch (filter) {
      case 'SHOW_ALL':
        return tasks;
      case 'SHOW_ACTIVE':
        return tasks.filter(task => !task.completed);
      case 'SHOW_COMPLETED':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }

  // get all saved tasks from indexedDB and update tasks array in state
  getAllTasksfromDB() {
    // retrieve from indexedDB
    this.dbPromise
      .then(db => {
        const tx = db.transaction('todoStore', 'readonly');
        const store = tx.objectStore('todoStore');
        return store.getAll();
      })
      // update state
      .then(data => {
        this.setState({
          id: data.length ? data[data.length - 1].id : 0,
          tasks: data,
        });
      });
  }

  // store todo task item in indexedDB and update tasks array in state
  handleFormSubmit(e) {
    const { text } = this.state;
    const { id } = this.state;
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    // save to indexedDB and update state
    this.dbPromise
      .then(db => {
        const tx = db.transaction('todoStore', 'readwrite');
        const store = tx.objectStore('todoStore');
        store.add({ id: id + 1, text, completed: false });
        return tx.complete;
      })
      .then(
        this.setState(state => ({
          id: state.id + 1,
          tasks: state.tasks.concat({ id: state.id + 1, text, completed: false }),
          text: '',
        }))
      )
      .catch(error => error);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleFilterTasks(filter) {
    this.setState({
      filter,
    });
  }

  // update task status:active|completed in state and indexedDB

  handleToggleTask(id) {
    const { tasks } = this.state;
    this.setState(state => ({
      tasks: state.tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)),
    }));

    this.dbPromise.then(db => {
      const tx = db.transaction('todoStore', 'readwrite');
      const store = tx.objectStore('todoStore');
      store.put({ id, text: tasks[id - 1].text, completed: !tasks[id - 1].completed });
      return tx.complete;
    });
  }

  render() {
    const { text, filter } = this.state;
    const tasks = this.getVisibleTasks(filter);
    return (
      <div className="todo-container">
        <h1 className="todo-title">To-Do</h1>
        <TodoInputForm onFormSubmit={this.handleFormSubmit} onInputChange={this.handleInputChange} text={text} />
        <TodoFilter filter={filter} onFilterTasks={this.handleFilterTasks} />
        <TodoItems tasks={tasks} onToggleTodo={this.handleToggleTask} />
      </div>
    );
  }
}
export default Todo;
