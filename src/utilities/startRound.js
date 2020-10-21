import {BOARD_X, BOARD_Y} from '../config';
import {includesArray} from './includesArray';

const checkMove = (board, col, row, value, correctMoves, movesToMake, movesMade) => {
    // add the current move to the moves made to avoid repetition
    movesMade.push([col, row]);
    // check block to the top
    if (row < BOARD_Y - 1 && board[col][row + 1] === value) {
        // if block to the top has the correct value and it's not already in correct moves, add it
        if (!includesArray(correctMoves, [col, row + 1])) {
            correctMoves.push([col, row + 1]);
        }
        // if the move to the block to the top hasn't been made yet, add it to moves to make
        if (!includesArray(movesMade, [col, row + 1])) {
            movesToMake.push([col, row + 1]);
        }
    }
    // check block to the bottom
    if (row > 0 && board[col][row - 1] === value) {
        // if block to the bottom has the correct value and it's not already in correct moves, add it
        if (!includesArray(correctMoves, [col, row - 1])) {
            correctMoves.push([col, row - 1]);
        }
        // if the move to the block to the bottom hasn't been made yet, add it to moves to make
        if (!includesArray(movesMade, [col, row - 1])) {
            movesToMake.push([col, row - 1]);
        }
    }
    // check block to the right
    if (col < BOARD_X - 1 && board[col + 1][row] === value) {
        // if block to the right has the correct value and it's not already in correct moves, add it
        if (!includesArray(correctMoves, [col + 1, row])) {
            correctMoves.push([col + 1, row]);
        }
        // if the move to the block to the right hasn't been made yet, add it to moves to make
        if (!includesArray(movesMade, [col + 1, row])) {
            movesToMake.push([col + 1, row]);
        }
    }
    // check block to the left
    if (col > 0 && board[col - 1][row] === value) {
        // if block to the left has the correct value and it's not already in correct moves, add it
        if (!includesArray(correctMoves, [col - 1, row])) {
            correctMoves.push([col - 1, row]);
        }
        // if the move to the block to the left hasn't been made yet, add it to moves to make
        if (!includesArray(movesMade, [col - 1, row])) {
            movesToMake.push([col - 1, row]);
        }
    }
    // if there are moves to make left...
    if (movesToMake.length > 0) {
        // save coordinates of first move to make next
        const x = movesToMake[0][0];
        const y = movesToMake[0][1];
        // delete the next move to make from the array of moves to make
        movesToMake.shift();
        // make a recursion
        checkMove(board, x, y, board[x][y], correctMoves, movesToMake, movesMade);
    }
    // return an empty array if there are no neighboring blocks of the same colour
    if (correctMoves.length > 1) {
        return correctMoves;
    } else {
        return [];
    }
}

export const startRound = (board, x, y) => {
    const moves = checkMove(x, y, board[x][y], [[x, y]], [], []);
    //console.log('\nROUND SCORE:', moves.length);
    return moves;
}
