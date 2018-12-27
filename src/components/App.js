import React from 'react';
import Header from './Header';
// import Quotes from './Quotes';
// import PomodoroTimer from './PomodoroTimer';
// import TimerSettings from './TimerSettings';
import PomodoroTimer from '../containers/PomodoroTimer';
// import Todo from './Todo/Todo';
// import alaramSound from '../assets/alaram.mp3';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />

      <div className="timer-container">
        {/*   <PomodoroTimer {...this.state} onStartTimer={this.handleStart} onResetTimer={this.handleReset} /> */}
        <PomodoroTimer />
      </div>
    </div>
  );
}

export default App;
