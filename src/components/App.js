import React from 'react';
import Header from './Header/Header';
import Quotes from '../containers/GetQuote';
import PomodoroTimer from '../containers/PomodoroTimer';
import TodoApp from '../containers/TodoApp';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Quotes />
      <PomodoroTimer />
      <TodoApp />
    </div>
  );
}

export default App;
