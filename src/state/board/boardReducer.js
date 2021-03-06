import {SET_BOARD, UPDATE_BOARD} from './boardTypes';
import {initializeBoard} from 'utilities';

const initialState = {
    board: []
}

const boardReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_BOARD:
            const board = initializeBoard();

            return {
                ...state,
                board: board
            }

        case UPDATE_BOARD: return {
            ...state,
            board: action.payload
        }

        default: return state
    }
}

export default boardReducer;
