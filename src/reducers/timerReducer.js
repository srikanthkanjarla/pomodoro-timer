// sessionLength, breakLength in minutes
// clockTime,secondsElapsed in seconds

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  clockTime: 1500,
  secondsElapsed: 0,
  isTimerRunning: false,
  isTimerPaused: false,
  isBreakTime: false,
  isAlarmON: true,
  isAutoStartON: true,
};

/* reducer */
function timerReducer(state = initialState, action) {
  switch (action.type) {
    /* Clock state */
    case 'START_TIMER':
      return {
        ...state,
        isTimerRunning: true,
        isTimerPaused: false,
      };
    case 'STOP_TIMER':
      return {
        ...state,
        isTimerRunning: false,
        isTimerPaused: true,
      };
    case 'RESET_TIMER':
      return {
        ...state,
        isTimerRunning: false,
        isTimerPaused: false,
        isBreakTime: false,
        clockTime: state.sessionLength !== '' ? state.sessionLength * 60 : 1500, // in seconds
        secondsElapsed: 0,
      };
    case 'RUN_TIMER':
      return {
        ...state,
        secondsElapsed: state.secondsElapsed + 1,
      };
    case 'START_BREAK':
      return {
        ...state,
        secondsElapsed: 0,
        clockTime: state.breakLength * 60,
        isBreakTime: true,
      };
    case 'AUTO_START_TIMER':
      return {
        ...state,
        isTimerRunning: true,
      };

    /* Clock settings */
    // update clockTime if timer not running - to reflect updated time in Clock
    case 'UPDATE_SESSION_LENGTH':
      return {
        ...state,
        sessionLength: action.value !== '' ? parseInt(action.value, 10) : '',
        clockTime:
          !state.isTimerRunning && !state.isTimerPaused && action.value !== ''
            ? parseInt(action.value, 10) * 60
            : state.clockTime,
      };

    case 'UPDATE_BREAK_LENGTH':
      return {
        ...state,
        breakLength: action.value !== '' ? parseInt(action.value, 10) : '',
      };
    case 'TOGGLE_ALARM_SOUND':
      return { ...state, isAlarmON: !state.isAlarmON };

    case 'TOGGLE_AUTO_START':
      return {
        ...state,
        isAutoStartON: !state.isAutoStartON,
      };

    default:
      return {
        ...state,
      };
  }
}

export default timerReducer;
