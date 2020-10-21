import React from 'react';
import BOARD from '../../data/DummyBoard';
import Colors from '../../data/Colors';
import './style.css';

const Game = () => {
    const board = BOARD;
    const colors = Colors;

    return (
        <div className="main">
            {board && board.map((column, index) => (
                <div
                    id={`col-${index}`}
                    key={`col-${index}`}
                    className="column"
                    >
                    {column.map((row, index) => (
                        <div
                            id={`block-${index}`}
                            key={`block-${index}`}
                            className="block"
                            style={{backgroundColor: `${colors[row]}`}}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default Game;
