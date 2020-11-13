import {SET_BOARD, UPDATE_BOARD} from './boardTypes';
import {checkNeighbors, eraseBlocks} from 'utilities';
import {increaseScore} from 'state';

export const setBoard = () => ({
    type: SET_BOARD
});

export const updateBoard = (board) => ({
    type: UPDATE_BOARD,
    payload: board
})

export const prepareBoard = (currentBoard, coordinates) => {
    return (dispatch) => {
        const blocks = checkNeighbors(currentBoard, coordinates[0], coordinates[1]);

        if (blocks.length > 0) {
            dispatch(increaseScore(blocks.length));

            const boardWithoutBlocks = eraseBlocks(currentBoard, blocks);

            let updatedBoard = [];
            boardWithoutBlocks.forEach(arr => updatedBoard.push(arr));

            dispatch(updateBoard(updatedBoard));
        }
    }
}
