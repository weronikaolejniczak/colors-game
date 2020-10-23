import {BOARD_Y, COLORS} from '../config';

const eraseBlocks = (board, blocks) => {
    //console.log(BOARD);
    //console.log(BLOCKS);
    const tempBoard = board;
    // for each of the blocks to erase, replace it with a 0 on the board
    for (const block in blocks) {
        const y = blocks[block][0];
        const x = blocks[block][1];
        tempBoard[y][x] = 0;
    }
    //console.log(tempBoard);
    // create an array of columns to consider - take the second coordinate from all the blocks (that is our x); get rid of duplications
    const columnsToConsider = [ ...new Set(blocks.map(elem => elem[1]))];
    //console.log(columns); // [2, 1]
    // for each column in ^ array...
    for (const col in columnsToConsider) {
        //console.log(columns[col])
        // initialize temporary column as array for simplicity
        let tempColAsArr = [];
        // ... take a value from each row of the board and put it into an array
        for (const row in tempBoard) {
            tempColAsArr.push(tempBoard[row][columnsToConsider[col]]);
        }
        //console.log('tempColAsArr before filtering', tempColAsArr); // before filtering
        // filter out 0's in ^ array
        tempColAsArr = tempColAsArr.filter(elem => elem !== 0);
        //console.log(tempColAsArr); // after filtering
        //console.log(tempColAsArr.length); // length after filtering
        /**
         * TODO: refactor in accordance with DRY - same in initializeBoard
         */
        const elemMissing = BOARD_Y - tempColAsArr.length;
        //console.log(elemMissing); // 2
        const elemToAdd = [];
        for (let i = 0; i < elemMissing; i++) {
            elemToAdd.push(Math.floor(Math.random() * COLORS + 1));
        }
        //console.log(elemToAdd);
        // add numbers to the beginning of each column
        tempColAsArr.unshift(...elemToAdd);
        //console.log('tempColAsArr after unshift', tempColAsArr);
        //console.log(columnsToConsider[col]);
        const colToReplace = columnsToConsider[col];
        for (const row in tempBoard) {
            for (let j = 0; j < BOARD_Y; j++) {
                tempBoard[row][colToReplace] = tempColAsArr[0];
            }
        }
        //console.log('tempBoard after erasing blocks:', tempBoard);
        return tempBoard;
    }
}

export default eraseBlocks;
