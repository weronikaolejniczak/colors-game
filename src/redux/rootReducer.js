import {combineReducers} from 'redux';
import boardReducer from './board/boardReducer';

const rootReducer = combineReducers({
    board: boardReducer
});

export default rootReducer;
