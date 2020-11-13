import {StyleSheet} from 'aphrodite';

import Colors from 'constants/Colors';

const GameBoardStyle = StyleSheet.create({
    GameBoard: {
        padding: 10,
        border: `${Colors.lightGrey} solid 2px`,
        borderRadius: 10,
        display: 'flex'
    }
});

export default GameBoardStyle;
