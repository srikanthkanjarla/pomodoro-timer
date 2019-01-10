import React from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';
import ClockControls from './ClockControls';
import TimerSettings from '../../containers/TimerSettings';
import './pomodoroApp.css';
import alarmSound from '../../assets/alarm.mp3';

class PomodoroTimer extends React.Component {
  constructor(props) {
    super(props);
    this.alarmRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const currentProps = this.props;
    const { secondsElapsed, clockTime, isBreakTime, isAutoStartON, resetTimer, autoStartTimer } = currentProps;

    // start timer
    // TODO - use Date object based timer than setInterval
    if (currentProps.isTimerRunning && !prevProps.isTimerRunning) {
      this.timerID = setInterval(() => {
        currentProps.runTimer();
      }, 1000);
    }

    // stop timer
    if (!currentProps.isTimerRunning && prevProps.isTimerRunning) {
      clearInterval(this.timerID);
    }

    // start break time, play alarm sound
    if (secondsElapsed === clockTime && !isBreakTime) {
      this.alarmRef.current.play();
      currentProps.startBreak();
    }

    // after break time reset or restart timer, play alarm sound
    if (secondsElapsed === clockTime && isBreakTime) {
      this.alarmRef.current.play();
      resetTimer();
      if (isAutoStartON) {
        autoStartTimer();
      } else {
        clearInterval(this.timerID);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { clockTime, secondsElapsed, isTimerRunning, isTimerPaused, isBreakTime } = this.props;
    const { startTimer, stopTimer, resetTimer } = this.props;
    return (
      <div className="timer-container">
        <div className="timer">
          <Clock
            clockTime={clockTime}
            secondsElapsed={secondsElapsed}
            isTimerRunning={isTimerRunning}
            isTimerPaused={isTimerPaused}
            isBreakTime={isBreakTime}
          />
          <ClockControls isTimerRunning={isTimerRunning} onStart={startTimer} onStop={stopTimer} onReset={resetTimer} />
        </div>

        <TimerSettings />
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio src={alarmSound} ref={this.alarmRef} />
      </div>
    );
  }
}
PomodoroTimer.propTypes = {
  clockTime: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  secondsElapsed: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  isBreakTime: PropTypes.bool.isRequired,
  isTimerRunning: PropTypes.bool.isRequired,
  isTimerPaused: PropTypes.bool.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
};
export default PomodoroTimer;
