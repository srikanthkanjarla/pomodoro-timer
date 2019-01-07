import React from 'react';
import PropTypes from 'prop-types';
import FormattedTime from './FormattedTime';

function Clock(props) {
  const { clockTime, secondsElapsed, isTimerRunning, isTimerPaused, isBreakTime } = props;
  let time;

  // clock time at initial render
  if (!isTimerRunning && !isTimerPaused) {
    time = clockTime;
  }
  // timer after start or stop
  else if ((isTimerRunning && !isTimerPaused) || (!isTimerRunning && isTimerPaused)) {
    time = secondsElapsed;
  }

  return (
    <div className={`clock${' '}${isBreakTime ? 'break' : 'session'}`}>
      <FormattedTime time={time} />
    </div>
  );
}
Clock.propTypes = {
  clockTime: PropTypes.number.isRequired,
  secondsElapsed: PropTypes.number.isRequired,
  isTimerRunning: PropTypes.bool.isRequired,
  isTimerPaused: PropTypes.bool.isRequired,
  isBreakTime: PropTypes.bool.isRequired,
};
export default Clock;
