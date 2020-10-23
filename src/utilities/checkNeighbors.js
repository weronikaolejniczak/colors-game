import {BOARD_Y, BOARD_X} from '../config';
import includesArray from './includesArray';

const checkMove = (board, row, col, value, correctMoves, movesToMake, movesMade) => {
    /* console.log('\nNEXT MOVE!')
    console.log('row and col:', row, col);
    console.log('value', value);
    console.log('correctMoves', correctMoves);
    console.log('movesToMake', movesToMake);
    console.log('movesMade', movesMade); */
    // add the current move to the moves made to avoid repetition
    movesMade.push([row, col]);
    // check block to the top
    if (col < BOARD_X - 1 && board[row][col + 1] === value) {
        // if block to the top has the correct value and it's not already in correct moves, add it
        if (!includesArray(correctMoves, [row, col + 1])) {
            correctMoves.push([row, col + 1]);
        }
        //console.log(!includesArray(movesMade, [row, col + 1]));
        // if the move to the block to the top hasn't been made yet, add it to moves to make
        if (!includesArray(movesMade, [row, col + 1])) {
            movesToMake.push([row, col + 1]);
        }
    }
    // check block to the bottom
    if (col > 0 && board[row][col - 1] === value) {
        // if block to the bottom has the correct value and it's not already in correct moves, add it
        if (!includesArray(correctMoves, [row, col - 1])) {
            correctMoves.push([row, col - 1]);
        }
        //console.log(!includesArray(movesMade, [row, col - 1]));
        // if the move to the block to the bottom hasn't been made yet, add it to moves to make
        if (!includesArray(movesMade, [row, col - 1])) {
            movesToMake.push([row, col - 1]);
        }
    }
    // check block to the right
    if (row < BOARD_Y - 1 && board[row + 1][col] === value) {
        // if block to the right has the correct value and it's not already in correct moves, add it
        if (!includesArray(correctMoves, [row + 1, col])) {
            correctMoves.push([row + 1, col]);
        }
        //console.log(!includesArray(movesMade, [row + 1, col]));
        // if the move to the block to the right hasn't been made yet, add it to moves to make
        if (!includesArray(movesMade, [row + 1, col])) {
            movesToMake.push([row + 1, col]);
        }
    }
    // check block to the left
    if (row > 0 && board[row - 1][col] === value) {
        // if block to the left has the correct value and it's not already in correct moves, add it
        if (!includesArray(correctMoves, [row - 1, col])) {
            correctMoves.push([row - 1, col]);
        }
        //console.log(!includesArray(movesMade, [row - 1, col]));
        // if the move to the block to the left hasn't been made yet, add it to moves to make
        if (!includesArray(movesMade, [row - 1, col])) {
            movesToMake.push([row - 1, col]);
        }
    }
    /* console.log('\nAFTER CHECKING!')
    console.log('correctMoves', correctMoves);
    console.log('movesToMake', movesToMake);
    console.log('movesMade', movesMade); */
    // if there are moves to make left...
    if (movesToMake.length > 0) {
        // save coordinates of first move to make next
        const y = movesToMake[0][0];
        const x = movesToMake[0][1];
        // delete the next move to make from the array of moves to make
        movesToMake.shift();
        /* console.log('\nBEFORE RECURSION!')
        console.log('correctMoves', correctMoves);
        console.log('movesToMake', movesToMake);
        console.log('movesMade', movesMade); */
        // make a recursion
        checkMove(board, y, x, board[y][x], correctMoves, movesToMake, movesMade);
    }
    // return an empty array if there are no neighboring blocks of the same colour
    if (correctMoves.length > 1) {
        return correctMoves;
    } else {
        return [];
    }
}

const checkNeighbors = (board, y, x) => {
    const moves = checkMove(board, y, x, board[y][x], [[y, x]], [], []);
    //console.log('\nROUND SCORE:', moves.length);
    return moves;
}

export default checkNeighbors;
