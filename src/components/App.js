import React from 'react';
import Header from './Header/Header';
import Quotes from '../containers/GetQuote';
import PomodoroTimer from '../containers/PomodoroTimer';
import Todo from './Todo/Todo';

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <Quotes />
      <PomodoroTimer />
      <Todo />
    </div>
  );
}

export default App;
