import React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';

import Game from './containers';
import {Header, Footer} from './components';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Game />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
