import {BOARD_X, BOARD_Y} from '../config';
import drawValue from './drawValue';

const initializeBoard = () => {
    const board = [];
    // push an empty column onto a board
    for (let i = 0; i < BOARD_X; i++) {
        board.push([]);
        // for each cell of this column, generate a value in the range from 1 to 7 (including)
        for (let j = 0; j < BOARD_Y; j++) {
            board[i].push(drawValue());
        }
    }

    return board;
}

export default initializeBoard;
