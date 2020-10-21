import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Colors from '../../data/Colors';
import {setBoard, updateBoard} from '../../redux';

import {Block, Column} from '../../components';
import './style.css';

const Game = (props) => {
    useEffect(() => {
        props.setBoard();
    }, []);

    const {board} = props;
    const colors = Colors;

    const handleClick = (event) => {
        const elementId = event.target.id;
        let coordinates = elementId.split('-').slice(1, 3);
        coordinates = [parseInt(coordinates[0], 10), parseInt(coordinates[1], 10)];
        //props.updateBoard(board, coordinates);
        console.log(coordinates);
    }

    return (
        <div className="game-board">
            {board && board.map((column, index) => (
                <Column
                    key={`col-${index}`}
                    index={index}
                    >
                    {column.map((row, index, arr) => {
                        return (
                        <Block
                            key={`block-${board.indexOf(arr)}-${index}`}
                            parentId={board.indexOf(arr)}
                            index={index}
                            row={row}
                            colors={colors}
                            handleClick={handleClick}
                        />
                    )})}
                </Column>
            ))}
        </div>
    );
}

/* access Redux state in React component; receives state as a parameter */
const mapStateToProps = state => {
    return {
        board: state.board.board
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
