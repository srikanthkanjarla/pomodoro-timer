import { connect } from 'react-redux';
import { startTimer, stopTimer, resetTimer, runTimer, startBreak, autoStartTimer } from '../actions';
import PomodoroTimer from '../components/Timer/PomodoroApp';

const mapStateToProps = state => ({
  clockTime: state.timer.clockTime,
  secondsElapsed: state.timer.secondsElapsed,
  isTimerRunning: state.timer.isTimerRunning,
  isTimerPaused: state.timer.isTimerPaused,
  isBreakTime: state.timer.isBreakTime,
  isAutoStartON: state.timer.isAutoStartON,
});

const mapDispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer()),
  stopTimer: () => dispatch(stopTimer()),
  resetTimer: () => dispatch(resetTimer()),
  runTimer: () => dispatch(runTimer()),
  startBreak: () => dispatch(startBreak()),
  autoStartTimer: () => dispatch(autoStartTimer()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PomodoroTimer);
