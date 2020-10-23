import React from 'react';
import {Block, Row} from '../../';
import './style.css';

const GameBoard = ({board, colors, handleClick}) => {
    return (
        <div className="game-board">
            {board && board.map((row, index) => (
                <Row
                    key={`row-${index}`}
                    index={index}
                    >
                    {row.map((cell, index, arr) => {
                        return (
                        <Block
                            key={`block-${board.indexOf(arr)}-${index}`}
                            parentId={board.indexOf(arr)}
                            index={index}
                            cell={cell}
                            colors={colors}
                            handleClick={handleClick}
                        />
                    )})}
                </Row>
            ))}
        </div>
    );
}

export default GameBoard;
