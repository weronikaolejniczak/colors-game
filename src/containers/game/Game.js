import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {setBoard, prepareBoard, clearScore} from 'state';
import Colors from 'data/Colors';
import {Button, ScoreBoard} from 'components/atoms';
import {GameBoard} from 'components/organisms';
import {default as styles} from './GameStyle.js';
import {css} from 'aphrodite';

const Game = (props) => {
    const {board, score} = props;
    const {setBoard, clearScore, prepareBoard} = props;
    const colors = Colors;

    useEffect(() => {
        setBoard();
    }, []);

    const handleRestart = () => {
        setBoard();
        clearScore();
    }

    const handleClickOnBlock = (event) => {
        const elementId = event.target.id;

        let coordinates = elementId.split('-').slice(1, 3);
        coordinates = [parseInt(coordinates[0], 10), parseInt(coordinates[1], 10)];

        prepareBoard(board, coordinates);
    }

    return (
        <div className={css(styles.Game)}>
            <div className={css(styles.Game__Actions)}>
                <Button handleClick={handleRestart} label="Restart" />
            </div>
            <ScoreBoard score={score} />
            <GameBoard board={board} colors={colors} handleClick={handleClickOnBlock} />
        </div>
    );
}

const mapStateToProps = state => ({
    board: state.board.board,
    score: state.score.score
});

const mapDispatchToProps = {
    setBoard,
    prepareBoard,
    clearScore
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
