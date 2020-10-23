import {combineReducers} from 'redux';
import boardReducer from './board/boardReducer';
import scoreReducer from './score/scoreReducer';

const rootReducer = combineReducers({
    board: boardReducer,
    score: scoreReducer
});

export default rootReducer;
