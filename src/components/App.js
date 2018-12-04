import React from 'react';
import Header from './Header';
import Quotes from './Quotes';
import PomodoroTimer from './Timer';
import TimerSettings from './TimerSettings';
import alaramSound from '../assets/alaram.mp3';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      elapsedMinutes: 0,
      elapsedSeconds: 0,
      isBreakTime: false,
      isTimerRunning: false,
      isSoundOn: true,
      isAutoStart: true,
      quoteText: 'Self-trust is the first secret of success',
    };
    const { sessionLength } = this.state;
    this.state.elapsedMinutes = sessionLength;
    this.audioRef = React.createRef();
    this.randomNum = Math.round(10000 * Math.random());
    this.callbackMethodName = `cb_${this.randomNum}`;
    this.END_POINT = 'https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=';

    this.handleStart = this.handleStart.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSessionLength = this.handleSessionLength.bind(this);
    this.handleBreakLength = this.handleBreakLength.bind(this);
    this.handleSoundSetting = this.handleSoundSetting.bind(this);
    this.handleAutoStart = this.handleAutoStart.bind(this);
    this.runTimer = this.runTimer.bind(this);
  }

  componentDidMount() {
    const that = this;
    // eslint-disable-next-line func-names
    window[this.callbackMethodName] = function(data) {
      that.setState({
        quoteText: data.quoteText,
      });
    };
    this.getJsonp(this.END_POINT, this.callbackMethodName);
  }

  getJsonp(url, callback) {
    const script = document.createElement('script');
    script.id = `script_${this.callbackMethodName}`;
    script.src = url + callback;
    document.body.appendChild(script);
    document.getElementById(script.id).remove();
  }

  handleStart() {
    const { isTimerRunning } = this.state;
    if (isTimerRunning) {
      /* if timer running : pause it */
      clearInterval(this.timerId);
    } else {
      /* run timer */
      this.timerId = setInterval(this.runTimer, 1000);
    }

    this.setState(state => ({
      isTimerRunning: !state.isTimerRunning,
    }));
  }

  handleReset() {
    const { sessionLength } = this.state;
    clearInterval(this.timerId);
    this.setState({
      elapsedMinutes: sessionLength,
      elapsedSeconds: 0,
      isTimerRunning: false,
      isBreakTime: false,
    });
  }

  handleSessionLength(event) {
    const { isTimerRunning } = this.state;
    const value = parseInt(event.target.value, 10);
    const number = Number.isNaN(value) ? 1 : value;

    this.setState({
      sessionLength: number,
    });
    /* update timer value if it is not running */
    if (!isTimerRunning) {
      this.setState({
        elapsedMinutes: number,
      });
    }
  }

  handleBreakLength(event) {
    const value = parseInt(event.target.value, 10);
    const number = Number.isNaN(value) ? 1 : value;

    this.setState({
      breakLength: number,
    });
  }

  handleAutoStart(event) {
    this.setState({
      isAutoStart: event.target.checked,
    });
  }

  handleSoundSetting(event) {
    this.setState({
      isSoundOn: event.target.checked,
    });
  }

  runTimer() {
    const {
      elapsedMinutes,
      elapsedSeconds,
      sessionLength,
      breakLength,
      isBreakTime,
      isSoundOn,
      isAutoStart,
    } = this.state;

    if (elapsedSeconds === 0 && elapsedMinutes !== 0) {
      this.setState(state => ({
        elapsedSeconds: 59,
        elapsedMinutes: state.elapsedMinutes - 1,
      }));
    } else if (elapsedMinutes === 0 && elapsedSeconds === 0 && isBreakTime === false) {
      /* start break time */
      if (isSoundOn) {
        this.audioRef.current.play();
      }

      this.setState({
        elapsedMinutes: breakLength,
        elapsedSeconds: 0,
        isBreakTime: true,
      });
    } else if (elapsedMinutes === 0 && elapsedSeconds === 0 && isBreakTime === true) {
      /* re start timer after break */
      this.getJsonp(this.END_POINT, this.callbackMethodName); // get new quote

      if (isAutoStart) {
        this.setState({
          elapsedMinutes: sessionLength,
        });
      } else {
        this.handleReset();
      }

      this.setState({
        isBreakTime: false,
      });
    } else {
      /* update elapsed seconds */
      this.setState(state => ({
        elapsedSeconds: state.elapsedSeconds - 1,
      }));
    }
  }

  render() {
    const { isBreakTime, quoteText } = this.state;
    return (
      <div className="container">
        <Header />
        <Quotes isBreakTime={isBreakTime} quoteText={quoteText} />
        <PomodoroTimer {...this.state} onStartTimer={this.handleStart} onResetTimer={this.handleReset} />
        <TimerSettings
          {...this.state}
          onUpdateSession={this.handleSessionLength}
          onUpdateBreak={this.handleBreakLength}
          onUpdateSound={this.handleSoundSetting}
          onAutoStart={this.handleAutoStart}
        />
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio src={alaramSound} ref={this.audioRef} />
      </div>
    );
  }
}
export default App;
