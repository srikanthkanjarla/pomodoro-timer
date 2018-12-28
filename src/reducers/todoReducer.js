const initialState = {
  text: '',
  filter: 'SHOW_ALL',
  tasks: [],
  nextTodoId: 0,
};
function todoReducer(state = initialState, action) {
  switch (action.type) {
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
        tasks: state.tasks.map(
          (task, index) =>
            index === action.id ? { ...task, completed: !state.tasks[action.id].completed } : { ...task }
        ),
      };
    case 'SET_TODO_FILTER':
      return { ...state, filter: action.filter };
    default:
      return { ...state };
  }
}

export default todoReducer;
