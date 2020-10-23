import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

/**
 * TODO: distinguish middleware between production and development
 */
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;
