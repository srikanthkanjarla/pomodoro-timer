// action constants
// timer constants
const START_TIMER = 'START_TIMER';
const RUN_TIMER = 'RUN_TIMER';
const STOP_TIMER = 'STOP_TIMER';
const RESET_TIMER = 'RESET_TIMER';
const START_BREAK = 'START_BREAK';
const AUTO_START_TIMER = 'AUTO_START_TIMER';
const UPDATE_SESSION_LENGTH = 'UPDATE_SESSION_LENGTH';
const UPDATE_BREAK_LENGTH = 'UPDATE_BREAK_LENGTH';
const TOGGLE_ALARM_SOUND = 'TOGGLE_ALARM_SOUND';
const TOGGLE_AUTO_START = 'TOGGLE_AUTO_START';
// quote constants
const UPDATE_QUOTE = 'UPDATE_QUOTE';
// todo constatns
const SYNC_TODO_DB = 'SYNC_TODO_DB';
const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const DELETE_TODO = 'DELETE_TODO';
const SET_TODO_FILTER = 'SET_TODO_FILTER';
const UPDATE_INPUT = 'UPDATE_INPUT';
const SET_NOTIFICATIONS = 'SET_NOTIFICATIONS';
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

// action creators
// timer actions
export const startTimer = () => ({
  type: START_TIMER,
});

export const runTimer = () => ({
  type: RUN_TIMER,
});

export const stopTimer = () => ({
  type: STOP_TIMER,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
});

export const startBreak = () => ({
  type: START_BREAK,
});

export const autoStartTimer = () => ({
  type: AUTO_START_TIMER,
});

export const updateSessionLength = value => ({
  type: UPDATE_SESSION_LENGTH,
  value,
});

export const updateBreakLength = value => ({
  type: UPDATE_BREAK_LENGTH,
  value,
});

export const toggleAlarmSound = () => ({
  type: TOGGLE_ALARM_SOUND,
});

export const toggleAutoStart = () => ({
  type: TOGGLE_AUTO_START,
});

// quote actions
export const updateQuote = quote => ({
  type: UPDATE_QUOTE,
  quote,
});

// todo actions
// sync redux store with indexedDB
export const syncTodosDB = (id, todos) => ({
  type: SYNC_TODO_DB,
  id,
  todos,
});

export const updateInput = text => ({
  type: UPDATE_INPUT,
  text,
});

export const addTodo = todo => ({
  type: ADD_TODO,
  todo,
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});
export const deleteTodo = id => ({
  type: DELETE_TODO,
  id,
});
export const setFilter = filter => ({
  type: SET_TODO_FILTER,
  filter,
});

export const setNotifications = text => ({
  type: SET_NOTIFICATIONS,
  text,
});
export const removeNotification = id => ({
  type: REMOVE_NOTIFICATION,
  id,
});
