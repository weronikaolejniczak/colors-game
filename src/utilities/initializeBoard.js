import {BOARD_X, BOARD_Y} from '../config';
import drawValue from './drawValue';

const initializeBoard = () => {
    const board = [];

    for (let i = 0; i < BOARD_X; i++) {
        board.push([]);

        for (let j = 0; j < BOARD_Y; j++) {
            board[i].push(drawValue());
        }
    }

    return board;
}

export default initializeBoard;
