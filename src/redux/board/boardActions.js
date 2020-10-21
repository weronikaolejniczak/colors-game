import {SET_BOARD, UPDATE_BOARD} from './boardTypes';
import {initializeBoard} from '../../utilities/initializeBoard';

export const setBoard = () => {
    const board = initializeBoard();
    return {
        type: SET_BOARD,
        payload: board
    }
}

/**
 * TODO
 * complete updateBoard action
 */
export const updateBoard = () => {
    const board = []
    return {
        type: UPDATE_BOARD,
        payload: board
    }
}
