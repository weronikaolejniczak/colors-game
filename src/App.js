import React from 'react';
import Game from './containers';
import {Header, Footer} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
