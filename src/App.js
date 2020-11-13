import React from 'react';
import {Provider} from 'react-redux';
import store from './state/store';

import Game from 'containers';
import {Header, Footer} from 'components/organisms';
import {default as styles} from './AppStyle.js';
import {css} from 'aphrodite';


function App() {
  return (
    <Provider store={store}>
      <div className={css(styles.App)}>
        <Header />
        <Game />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
