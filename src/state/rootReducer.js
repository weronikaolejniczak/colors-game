import {combineReducers} from 'redux';

import boardReducer from 'state/board/boardReducer';
import scoreReducer from 'state/score/scoreReducer';

const rootReducer = combineReducers({
    board: boardReducer,
    score: scoreReducer
});

export default rootReducer;
