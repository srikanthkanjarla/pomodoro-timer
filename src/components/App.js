import React from 'react';
import Quotes from './Quotes';
import PomodoroTimer from './PomodoroTimer';
import PomodoroTimerSettings from './PomodoroTimerSettings';

function App() {
  return (
    <div className="container">
      <Quotes />
      <PomodoroTimer />
      <PomodoroTimerSettings />
    </div>
  );
}

export default App;
