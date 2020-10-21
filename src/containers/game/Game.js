import React from 'react';
//import BOARD from '../../data/DummyBoard';
import Colors from '../../data/Colors';
import {Block, Column} from '../../components';
import {initializeBoard} from '../../utilities/initializeBoard';
import './style.css';

const Game = () => {
    const board = initializeBoard();
    const colors = Colors;

    return (
        <div className="game-board">
            {board && board.map((column, index) => (
                <Column index={index}>
                    {column.map((row, index) => (
                        <Block
                            index={index}
                            row={row}
                            colors={colors}
                        />
                    ))}
                </Column>
            ))}
        </div>
    );
}

export default Game;
