import React from 'react';
import PropTypes from 'prop-types';
import './settings.css';

function PomodoroTimerSettings(props) {
  const { sessionLength, breakLength, isAlarmON, isAutoStartON } = props;
  const { updateSessionLength, updateBreakLength, toggleAlarmSound, toggleAutoStart } = props;
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
            name="sessionLength"
            onChange={event => updateSessionLength(event.target.value)}
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
            name="breakLength"
            onChange={event => updateBreakLength(event.target.value)}
          />
          Break Length
        </label>
      </div>
      <div className="other-settings">
        <label htmlFor="sounds" className="sound-setting">
          <input type="checkbox" id="sounds" name="timer-sounds" checked={isAlarmON} onChange={toggleAlarmSound} />
          <span />
          Alarm Sound
        </label>
        <br />
        <label htmlFor="auto-start" className="auto-start">
          <input
            type="checkbox"
            id="auto-start"
            name="timer-sounds"
            checked={isAutoStartON}
            onChange={toggleAutoStart}
          />
          <span />
          Auto start session
        </label>
      </div>
    </div>
  );
}
PomodoroTimerSettings.propTypes = {
  sessionLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  breakLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  updateSessionLength: PropTypes.func.isRequired,
  updateBreakLength: PropTypes.func.isRequired,
  toggleAlarmSound: PropTypes.func.isRequired,
  toggleAutoStart: PropTypes.func.isRequired,
  isAlarmON: PropTypes.bool.isRequired,
  isAutoStartON: PropTypes.bool.isRequired,
};
export default PomodoroTimerSettings;
