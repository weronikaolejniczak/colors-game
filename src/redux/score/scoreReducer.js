import {CLEAR_SCORE, INCREASE_SCORE} from './scoreTypes';

const initialState = {
    score: 0
}

const scoreReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLEAR_SCORE: return {
            ...state,
            score: 0
        }

        case INCREASE_SCORE: return {
            ...state,
            score: state.score + action.payload
        }

        default: return state
    }
}

export default scoreReducer;
