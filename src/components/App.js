import React from 'react';
import Header from './Header/Header';
import Quotes from '../containers/GetQuote';
import PomodoroTimer from '../containers/PomodoroTimer';
import TodoApp from '../containers/TodoApp';

import './App.css';

function App() {
  return (
    <div>
      <div className="container">
        <Header />
        <div className="content">
          <Quotes />
          <PomodoroTimer />
        </div>
      </div>

      <TodoApp />
    </div>
  );
}

export default App;
