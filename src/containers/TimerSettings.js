import { connect } from 'react-redux';
import { updateSessionLength, updateBreakLength, toggleAlarmSound, toggleAutoStart } from '../actions';
import TimerSettings from '../components/Timer/Settings';

const mapStateToProps = state => ({
  sessionLength: state.timer.sessionLength,
  breakLength: state.timer.breakLength,
  isAlarmON: state.timer.isAlarmON,
  isAutoStartON: state.timer.isAutoStartON,
});

const mapDispatchToProps = dispatch => ({
  updateSessionLength: value => {
    dispatch(updateSessionLength(value));
  },
  updateBreakLength: value => {
    dispatch(updateBreakLength(value));
  },
  toggleAlarmSound: () => dispatch(toggleAlarmSound()),
  toggleAutoStart: () => dispatch(toggleAutoStart()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerSettings);
