import {SET_BOARD, UPDATE_BOARD} from './boardTypes';
import {initializeBoard} from '../../utilities/initializeBoard';
import {startRound} from '../../utilities/startRound';

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
export const updateBoard = (currentBoard, blockCoordinates) => {
    console.log('currentBoard', currentBoard);
    console.log('blockCoordinates', blockCoordinates);

    // get blocks that are neighboring and of the same color using a utility for starting a round and checking the surroundings of the given block
    const blocks = startRound(currentBoard, blockCoordinates[0], blockCoordinates[1]);
    console.log('blocks', blocks);

    // change values at given coordinates to 0
    // for each column filter out 0's
    // generate values for column.length until the BOARD_Y

    return {
        type: UPDATE_BOARD,
        payload: currentBoard
    }
}
