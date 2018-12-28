import { combineReducers } from 'redux';

import timerReducer from './timerReducer';
import quoteReducer from './quoteReducer';
import todoReducer from './todoReducer';

export default combineReducers({
  timer: timerReducer,
  quote: quoteReducer,
  todo: todoReducer,
});
