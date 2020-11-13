import {BOARD_X, BOARD_Y} from 'config';
import includesArray from 'utilities/includesArray';

const checkMove = (board, col, row, value, correctMoves, movesToMake, movesMade) => {
    movesMade.push([col, row]);

    if (row < BOARD_Y - 1 && board[col][row + 1] === value) {
        if (!includesArray(correctMoves, [col, row + 1])) {
            correctMoves.push([col, row + 1]);
        }
        if (!includesArray(movesMade, [col, row + 1])) {
            movesToMake.push([col, row + 1]);
        }
    }

    if (row > 0 && board[col][row - 1] === value) {
        if (!includesArray(correctMoves, [col, row - 1])) {
            correctMoves.push([col, row - 1]);
        }
        if (!includesArray(movesMade, [col, row - 1])) {
            movesToMake.push([col, row - 1]);
        }
    }

    if (col < BOARD_X - 1 && board[col + 1][row] === value) {
        if (!includesArray(correctMoves, [col + 1, row])) {
            correctMoves.push([col + 1, row]);
        }
        if (!includesArray(movesMade, [col + 1, row])) {
            movesToMake.push([col + 1, row]);
        }
    }

    if (col > 0 && board[col - 1][row] === value) {
        if (!includesArray(correctMoves, [col - 1, row])) {
            correctMoves.push([col - 1, row]);
        }
        if (!includesArray(movesMade, [col - 1, row])) {
            movesToMake.push([col - 1, row]);
        }
    }

    if (movesToMake.length > 0) {
        const x = movesToMake[0][0];
        const y = movesToMake[0][1];
        movesToMake.shift();
        checkMove(board, x, y, board[x][y], correctMoves, movesToMake, movesMade);
    }

    if (correctMoves.length > 1) {
        return correctMoves;
    } else {
        return [];
    }
}

const checkNeighbors = (board, x, y) => {
    const moves = checkMove(board, x, y, board[x][y], [[x, y]], [], []);
    return moves;
}

export default checkNeighbors;
