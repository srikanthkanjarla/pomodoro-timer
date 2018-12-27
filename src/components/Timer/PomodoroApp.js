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
      this.alaramRef.current.play();
      if (currentProps.isAutoStartON) {
        currentProps.autoStartTimer();
      } else {
        clearInterval(this.timerID);
        currentProps.resetTimer();
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const { sessionLength, secondsElapsed, isTimerRunning, isTimerPaused, isBreakTime } = this.props;
    const { startTimer, stopTimer, resetTimer } = this.props;
    return (
      <div className="timer">
        <Clock
          sessionLength={sessionLength}
          secondsElapsed={secondsElapsed}
          isTimerRunning={isTimerRunning}
          isTimerPaused={isTimerPaused}
          isBreakTime={isBreakTime}
        />
        <ClockControls isTimerRunning={isTimerRunning} onStart={startTimer} onStop={stopTimer} onReset={resetTimer} />
        <TimerSettings />
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio src={alaramSound} ref={this.alaramRef} />
      </div>
    );
  }
}
PomodoroTimer.propTypes = {
  sessionLength: PropTypes.number.isRequired,
  secondsElapsed: PropTypes.number.isRequired,
  isBreakTime: PropTypes.bool.isRequired,
  isTimerRunning: PropTypes.bool.isRequired,
  isTimerPaused: PropTypes.bool.isRequired,
  startTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired,
  resetTimer: PropTypes.func.isRequired,
};
export default PomodoroTimer;
