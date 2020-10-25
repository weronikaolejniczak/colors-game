import {StyleSheet} from 'aphrodite';

const GameStyle = StyleSheet.create({
    Game: {
        height: 'calc(100vh - 80px - 50px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Game__Actions: {
        marginBottom: 15,
        paddingLeft: 50,
        paddingRight: 50
    }
});

export default GameStyle;
