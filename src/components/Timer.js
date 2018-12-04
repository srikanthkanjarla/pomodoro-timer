import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Timer.css';
import './Button.css';

function PomodoroTimer(props) {
  const { elapsedMinutes, elapsedSeconds, isBreakTime, isTimerRunning, onStartTimer, onResetTimer } = props;
  const clockStyle = {
    boxShadow: ' 0 0 10px 10px #3066be,0px 0px 3px 3px inset #6d9dc5',
  };
  /* update document title with clock time */
  document.title = `${`${elapsedMinutes < 10 ? `0${elapsedMinutes}` : elapsedMinutes} : `}${
    elapsedSeconds < 10 ? `0${elapsedSeconds}` : elapsedSeconds
  }`;

  return (
    <div className="timer">
      <div className="clock" style={isBreakTime ? clockStyle : {}}>
        {elapsedMinutes < 10 ? `0${elapsedMinutes}` : elapsedMinutes}
        {' : '}
        {elapsedSeconds < 10 ? `0${elapsedSeconds}` : elapsedSeconds}
      </div>
      <br />
      <Button
        name="start"
        value={isTimerRunning ? 'Pause' : 'Start'}
        className={isTimerRunning ? 'btn btn-stop' : 'btn btn-start'}
        onClick={onStartTimer}
      />
      <Button name="reset" value="Reset" className="btn btn-reset" onClick={onResetTimer} />
    </div>
  );
}

PomodoroTimer.propTypes = {
  elapsedMinutes: PropTypes.number.isRequired,
  elapsedSeconds: PropTypes.number.isRequired,
  isBreakTime: PropTypes.bool.isRequired,
  isTimerRunning: PropTypes.bool.isRequired,
  onResetTimer: PropTypes.func.isRequired,
  onStartTimer: PropTypes.func.isRequired,
};
export default PomodoroTimer;
