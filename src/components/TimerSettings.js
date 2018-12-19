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
    <div className="settings">
      <h2>settings</h2>
      <div className="timer-settings">
        <label htmlFor="session">
          <input
            type="number"
            id="session"
            min="1"
            max="60"
            value={sessionLength}
            name="sessionTime"
            onChange={onUpdateSession}
          />
          Session Length
        </label>
        <br />
        <label htmlFor="break">
          <input
            type="number"
            id="break"
            min="1"
            max="20"
            value={breakLength}
            name="breakTime"
            onChange={onUpdateBreak}
          />
          Break Length
        </label>
      </div>
      <div className="other-settings">
        <label htmlFor="sounds" className="sound-setting">
          <input type="checkbox" id="sounds" name="timer-sounds" checked={isSoundOn} onChange={onUpdateSound} />
          <span />
          Sounds
        </label>
        <br />
        <label htmlFor="auto-start" className="auto-start">
          <input type="checkbox" id="auto-start" name="timer-sounds" checked={isAutoStart} onChange={onAutoStart} />
          <span />
          Auto start session
        </label>
      </div>
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
  isSoundOn: PropTypes.bool.isRequired,
  isAutoStart: PropTypes.bool.isRequired,
};
export default PomodoroTimerSettings;
