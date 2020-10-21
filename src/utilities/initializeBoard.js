const BOARD_X = process.env.REACT_APP_BOARD_X;
const BOARD_Y = process.env.REACT_APP_BOARD_Y;
const COLORS = process.env.REACT_APP_COLORS;

export const initializeBoard = () => {
    const board = [];
    // push an empty column onto a board
    for (let i = 0; i < BOARD_X; i++) {
        board.push([]);
        // for each row of this column, generate a value for the cell in the range from 1 to 7 (including)
        for (let j = 0; j < BOARD_Y; j++) {
            board[i].push(Math.floor(Math.random() * COLORS + 1));
        }
    }

    return board;
}
