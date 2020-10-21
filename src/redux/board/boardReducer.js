import {SET_BOARD, UPDATE_BOARD} from './boardTypes';

const initialState = {
    board: []
}

const boardReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BOARD:
        case UPDATE_BOARD: return {
            ...state,
            board: action.payload
        }

        default: return state
    }
}

export default boardReducer;
