import {BOARD_Y, BOARD_X, COLORS} from '../config';

const initializeBoard = () => {
    const board = [];
    // push an empty column onto a board
    for (let i = 0; i < BOARD_Y; i++) {
        board.push([]);
        // for each row of this column, generate a value for the cell in the range from 1 to 7 (including)
        for (let j = 0; j < BOARD_X; j++) {
            board[i].push(Math.floor(Math.random() * COLORS + 1));
        }
    }
    //console.log(board);
    return board;
}

export default initializeBoard;
