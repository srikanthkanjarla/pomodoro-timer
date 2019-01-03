const initialState = {
  text: '',
  filter: 'SHOW_ALL',
  tasks: [],
  nextTodoId: 0,
  showNotification: false,
  notifications: [],
  notificationId: 0,
};
function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'SYNC_TODO_DB':
      return { ...state, tasks: action.todos, nextTodoId: action.id };
    case 'ADD_TODO':
      return {
        ...state,
        text: '',
        tasks: state.tasks.concat({ id: state.nextTodoId, text: action.todo, completed: false }),
        nextTodoId: state.nextTodoId + 1,
      };
    case 'UPDATE_INPUT':
      return { ...state, text: action.text };
    case 'TOGGLE_TODO':
      return {
        ...state,
        tasks: state.tasks.map(task => (task.id === action.id ? { ...task, completed: !task.completed } : { ...task })),
      };
    case 'DELETE_TODO':
      return { ...state, tasks: state.tasks.filter(item => item.id !== action.id) };
    case 'SET_TODO_FILTER':
      return { ...state, filter: action.filter };

    case 'SET_NOTIFICATIONS':
      return {
        ...state,
        notifications: state.notifications.concat({ id: state.notificationId, text: action.text }),
        notificationId: state.notificationId + 1,
      };
    case 'SET_SHOW_NOTIFICATIONS':
      return { ...state, showNotification: true };
    case 'REMOVE_NOTIFICATION':
      return {
        ...state,
        notifications: state.notifications.filter(item => item.id !== action.id),
      };
    default:
      return { ...state };
  }
}

export default todoReducer;
