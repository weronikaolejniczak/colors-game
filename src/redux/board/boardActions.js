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
        // get blocks that are neighboring and of the same color using a utility for starting a round and checking the surroundings of the given block
        const blocks = checkNeighbors(currentBoard, coordinates[0], coordinates[1]);
        if (blocks.length > 0) {
            // if there are blocks to erase, increase the score by the number of them
            dispatch(increaseScore(blocks.length));
            // erase the blocks
            const boardWithoutBlocks = eraseBlocks(currentBoard, blocks);
            // make a deep copy in accordance with Redux immutability 'law'
            let board = [];
            boardWithoutBlocks.forEach(arr => board.push(arr));
            // update the board with boardWithoutBlocks
            dispatch({
                type: UPDATE_BOARD,
                payload: board
            })
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
}
