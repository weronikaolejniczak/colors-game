import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setBoard, updateBoard, clearScore} from '../../redux';
import Colors from '../../data/Colors';

import {Button, ScoreBoard, GameBoard} from '../../components';
import {default as styles} from './GameStyle.js';
import {css} from 'aphrodite';

const Game = (props) => {
    const {board, score} = props;
    const colors = Colors;

    useEffect(() => {
        props.setBoard();
    }, []);

    const handleRestart = () => {
        props.setBoard();
        props.clearScore();
    }

    const handleClickOnBlock = (event) => {
        const elementId = event.target.id;

        let coordinates = elementId.split('-').slice(1, 3);
        coordinates = [parseInt(coordinates[0], 10), parseInt(coordinates[1], 10)];

        props.updateBoard(board, coordinates);
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

const mapStateToProps = state => {
    return {
        board: state.board.board,
        score: state.score.score
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setBoard: () => dispatch(setBoard()),
        updateBoard: (currentBoard, blockCoordinates) => dispatch(updateBoard(currentBoard, blockCoordinates)),
        clearScore: () => dispatch(clearScore())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
