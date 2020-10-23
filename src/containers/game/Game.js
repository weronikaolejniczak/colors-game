import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Colors from '../../data/Colors';
import {setBoard, updateBoard, increaseScore} from '../../redux';
import {checkNeighbors} from '../../utilities/';

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
        let coordinates = elementId.split('-').slice(1, 3);
        coordinates = [parseInt(coordinates[0], 10), parseInt(coordinates[1], 10)];
        // get blocks that are neighboring and of the same color using a utility for starting a round and checking the surroundings of the given block
        const blocks = checkNeighbors(board, coordinates[0], coordinates[1]);
        props.updateBoard(board, blocks);
        props.increaseScore(blocks.length);
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
        updateBoard: (currentBoard, blockCoordinates) => dispatch(updateBoard(currentBoard, blockCoordinates)),
        increaseScore: (num) => dispatch(increaseScore(num))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
