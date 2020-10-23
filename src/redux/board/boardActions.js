import {SET_BOARD, UPDATE_BOARD} from './boardTypes';
import {initializeBoard, checkNeighbors, eraseBlocks} from '../../utilities/';

export const setBoard = () => {
    const board = initializeBoard();

    return {
        type: SET_BOARD,
        payload: board
    }
}

export const updateBoard = (currentBoard, blockCoordinates) => {
    //console.log('currentBoard', currentBoard);
    //console.log('blockCoordinates', blockCoordinates);
    // get blocks that are neighboring and of the same color using a utility for starting a round and checking the surroundings of the given block
    const blocks = checkNeighbors(currentBoard, blockCoordinates[0], blockCoordinates[1]);
    //console.log('blocks', blocks);
    // change values at given coordinates to 0
    if (blocks.length > 0) {
        const boardWithoutBlocks = eraseBlocks(currentBoard, blocks);
        // make a deep copy in accordance with Redux immutability 'law'
        let board = [];
        boardWithoutBlocks.forEach(arr => board.push(arr));

        return {
            type: UPDATE_BOARD,
            payload: board
        }
    } else {
        /**
         * TODO: delegate to an action of board being unchanged to display a message in UI
         */
        return {
            type: UPDATE_BOARD,
            payload: currentBoard
        }
    }
}
