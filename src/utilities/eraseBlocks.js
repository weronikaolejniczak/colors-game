import {BOARD_Y} from '../config';
import drawValue from './drawValue';

const eraseBlocks = (board, blocks) => {
    for (const block in blocks) {
        const y = blocks[block][0];
        const x = blocks[block][1];
        board[y][x] = 0;
    }

    for (const column in board) {
        board[column] = board[column].filter(elem => elem !== 0);

        if (board[column].length < BOARD_Y) {
            for (let i = board[column].length; i < BOARD_Y; i++) {
                board[column].push(drawValue())
            }
        }
    }

    return board;
}

export default eraseBlocks;
