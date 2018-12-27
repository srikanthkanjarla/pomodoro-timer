import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ClockControls(props) {
  const { isTimerRunning, onStart, onStop, onReset } = props;
  return (
    <div className="btn-controls">
      {isTimerRunning ? (
        <Button name="stop" value="Pause" className="btn btn-stop" onClick={onStop} />
      ) : (
        <Button name="start" value="Start" className="btn btn-start" onClick={onStart} />
      )}
      <Button name="reset" value="Reset" className="btn btn-reset" onClick={onReset} />
    </div>
  );
}

ClockControls.propTypes = {
  isTimerRunning: PropTypes.bool.isRequired,
  onStart: PropTypes.func.isRequired,
  onStop: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};
export default ClockControls;
