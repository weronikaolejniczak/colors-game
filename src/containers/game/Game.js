import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {setBoard, updateBoard} from '../../redux';
import Colors from '../../data/Colors';

import {ScoreBoard, GameBoard} from '../../components';
import './style.css';

const Game = (props) => {
    const {board, score} = props;
    const colors = Colors;

    useEffect(() => {
        props.setBoard();
    }, []);

    const handleClick = (event) => {
        const elementId = event.target.id;
        // extract block coordinates from component's ID
        let coordinates = elementId.split('-').slice(1, 3);
        coordinates = [parseInt(coordinates[0], 10), parseInt(coordinates[1], 10)];
        // dispatch an action to update board and increase the score accordingly (if at all)
        props.updateBoard(board, coordinates);
    }

    return (
        <div className="game-container">
            <ScoreBoard score={score} />
            <GameBoard board={board} colors={colors} handleClick={handleClick} />
        </div>
    );
}

/* access Redux state in React component; receives state as a parameter */
const mapStateToProps = state => {
    return {
        board: state.board.board,
        score: state.score.score
    }
}

/* access dispatch method to dispatch an action to Redux store from React component */
const mapDispatchToProps = dispatch => {
    return {
        setBoard: () => dispatch(setBoard()),
        updateBoard: (currentBoard, blockCoordinates) => dispatch(updateBoard(currentBoard, blockCoordinates))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
