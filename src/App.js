import React from 'react';
import Game from './containers';
import {Header} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Game />
    </div>
  );
}

export default App;
