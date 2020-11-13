import {SET_BOARD, UPDATE_BOARD} from './boardTypes';
import {initializeBoard, checkNeighbors, eraseBlocks} from '../../utilities/';
import {increaseScore} from '../';

export const setBoard = () => {
    const board = initializeBoard();

    return {
        type: SET_BOARD,
        payload: board
    }
}

export const updateBoard = (currentBoard, coordinates) => {
    return (dispatch) => {
        const blocks = checkNeighbors(currentBoard, coordinates[0], coordinates[1]);

        if (blocks.length > 0) {
            dispatch(increaseScore(blocks.length));

            const boardWithoutBlocks = eraseBlocks(currentBoard, blocks);
            let board = [];
            boardWithoutBlocks.forEach(arr => board.push(arr));

            return dispatch({
                type: UPDATE_BOARD,
                payload: board
            })
        }
    }
}
