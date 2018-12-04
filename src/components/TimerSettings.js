import React from 'react';
import PropTypes from 'prop-types';
import './TimerSettings.css';

function PomodoroTimerSettings(props) {
  const {
    sessionLength,
    breakLength,
    isSoundOn,
    isAutoStart,
    onUpdateSession,
    onUpdateBreak,
    onUpdateSound,
    onAutoStart,
  } = props;
  return (
    <div className="timer-settings">
      <h2>settings</h2>
      <label htmlFor="session">
        Session Length
        <input
          type="number"
          id="session"
          min="1"
          max="60"
          value={sessionLength}
          name="sessionTime"
          onChange={onUpdateSession}
        />
      </label>

      <label htmlFor="break">
        Break Length
        <input
          type="number"
          id="break"
          min="1"
          max="20"
          value={breakLength}
          name="breakTime"
          onChange={onUpdateBreak}
        />
      </label>
      <label htmlFor="sounds">
        Sounds
        <input type="checkbox" id="sounds" name="timer-sounds" checked={isSoundOn} onChange={onUpdateSound} />
        <span />
      </label>
      <label htmlFor="auto-start">
        Auto start session
        <input type="checkbox" id="auto-start" name="timer-sounds" checked={isAutoStart} onChange={onAutoStart} />
        <span />
      </label>
    </div>
  );
}
PomodoroTimerSettings.propTypes = {
  sessionLength: PropTypes.number.isRequired,
  breakLength: PropTypes.number.isRequired,
  onUpdateSession: PropTypes.func.isRequired,
  onUpdateBreak: PropTypes.func.isRequired,
  onUpdateSound: PropTypes.func.isRequired,
  onAutoStart: PropTypes.func.isRequired,
};
export default PomodoroTimerSettings;
