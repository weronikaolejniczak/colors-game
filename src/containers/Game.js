import React from 'react';
import BOARD from '../data/DummyBoard';

const Game = () => {
    const board = BOARD;
    return (
        <div className="main">
            {board && board.map(column => (
                column.map(row => (
                    <div className="block">{row}</div>
                ))
            ))}
        </div>
    );
}

export default Game;
