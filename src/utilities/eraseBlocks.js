import {BOARD_Y} from '../config';
import drawValue from './drawValue';

const eraseBlocks = (board, blocks) => {
    //console.log('\nBlocks passed:', blocks);
    // for each of the blocks to erase, replace it with a 0 on the board
    for (const block in blocks) {
        const y = blocks[block][0];
        const x = blocks[block][1];
        board[y][x] = 0;
    }
    // for each column of the board...
    for (const column in board) {
        // ... filter out 0s
        board[column] = board[column].filter(elem => elem !== 0);
        if (board[column].length < BOARD_Y) {
            //console.log('Column:', board[column]);
            //console.log('Length:', board[column].length);
            for (let i = board[column].length; i < BOARD_Y; i++) {
                board[column].push(drawValue())
            }
        }
    }
    //console.log('board after erasing blocks:', board);
    return board;
}

export default eraseBlocks;
