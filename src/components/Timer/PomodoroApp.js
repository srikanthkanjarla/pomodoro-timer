import React from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';
import ClockControls from './ClockControls';
import TimerSettings from '../../containers/TimerSettings';
import './pomodoroApp.css';
import alaramSound from '../../assets/alaram.mp3';

class PomodoroTimer extends React.Component {
  constructor(props) {
    super(props);
    this.alaramRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const currentProps = this.props;
    // start timer
    if (currentProps.isTimerRunning && !prevProps.isTimerRunning) {
      this.timerID = setInterval(() => {
        currentProps.runTimer();
      }, 1000);
    }
    // pause/stop timer
    if (!currentProps.isTimerRunning && prevProps.isTimerRunning) {
      clearInterval(this.timerID);
    }
    // start break time
    if (currentProps.secondsElapsed === 0 && !currentProps.isBreakTime) {
      currentProps.startBreak();
    }
    // after break time reset or restart timer and play alaram sound
    if (currentProps.secondsElapsed === 0 && currentProps.isBreakTime) {
      // play alaram sound after break time
      this.alaramRef.current.play();
      // if auto start is true re start
      if (currentProps.isAutoStartON) {
        currentProps.autoStartTimer();
      } else {
        clearInterval(this.timerID);
        currentProps.resetTimer();
      }
    }
    // sync elapsedSeconds with sessionLength on sessionLength update
    if (!currentProps.isTimerRunning && !currentProps.isTimerPaused) {
      currentProps.resetTimer();
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
        <audio src={alaramSound} ref={this.alaramRef} />
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
