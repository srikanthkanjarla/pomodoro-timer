import { combineReducers } from 'redux';

import timerReducer from './timerReducer';
import quoteReducer from './quoteReducer';

export default combineReducers({
  timer: timerReducer,
  quote: quoteReducer,
});
