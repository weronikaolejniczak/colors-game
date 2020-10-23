import React from 'react';
import {Block, Column} from '../../';
import './style.css';

const GameBoard = ({board, colors, handleClick}) => {
    return (
        <div className="game-board">
            {board && board.map((column, index) => (
                <Column
                    key={`col-${index}`}
                    index={index}
                    >
                    {column.map((cell, index, arr) => {
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
                </Column>
            ))}
        </div>
    );
}

export default GameBoard;
