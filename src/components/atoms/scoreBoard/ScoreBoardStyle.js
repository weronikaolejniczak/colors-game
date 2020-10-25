import {StyleSheet} from 'aphrodite';

const ScoreBoardStyle = StyleSheet.create({
    ScoreBoard: {
        display: 'flex',
        paddingLeft: 25,
        paddingRight: 25,
        fontSize: 20,
    },
    ScoreBoard__Entry: {
        paddingLeft: 10,
        paddingRight: 10
    },
    ScoreBoard__Title: {
        fontWeight: 'bold'
    },
    ScoreBoard__Value: {
        marginLeft: 10
    }
});

export default ScoreBoardStyle;
