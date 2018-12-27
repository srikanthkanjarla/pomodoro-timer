import React from 'react';
import PropTypes from 'prop-types';
import FormattedTime from './FormattedTime';

function Clock(props) {
  const { sessionLength, secondsElapsed, isTimerRunning, isTimerPaused, isBreakTime } = props;
  let time;

  if (!isTimerRunning && !isTimerPaused) {
    time = sessionLength * 60; // * 60 to conver it into seconds
  } else if ((isTimerRunning && !isTimerPaused) || (!isTimerRunning && isTimerPaused)) {
    time = secondsElapsed;
  }

  return (
    <div className={`clock${' '}${isBreakTime ? 'break' : 'session'}`}>
      <FormattedTime time={time} />
    </div>
  );
}
Clock.propTypes = {
  sessionLength: PropTypes.number.isRequired,
  secondsElapsed: PropTypes.number.isRequired,
  isTimerRunning: PropTypes.bool.isRequired,
  isTimerPaused: PropTypes.bool.isRequired,
  isBreakTime: PropTypes.bool.isRequired,
};
export default Clock;
