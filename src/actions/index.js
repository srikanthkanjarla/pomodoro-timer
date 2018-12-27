/* action constants */
// TIMER_START TIMER_DECREMENT TIMER_RESET, TIMER_PAUSE, TIMER_END BREAK_TIME SESSION_TIME TIMER_TICK

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
const UPDATE_QUOTE = 'UPDATE_QUOTE';

/* action creators */
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
  payload: value,
});

export const updateBreakLength = value => ({
  type: UPDATE_BREAK_LENGTH,
  payload: value,
});

export const toggleAlarmSound = () => ({
  type: TOGGLE_ALARM_SOUND,
});

export const toggleAutoStart = () => ({
  type: TOGGLE_AUTO_START,
});

export const updateQuote = quote => ({
  type: UPDATE_QUOTE,
  payload: quote,
});
