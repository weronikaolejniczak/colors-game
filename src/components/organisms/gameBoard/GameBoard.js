import React from 'react';
import {css} from 'aphrodite';

import {Block} from 'components/atoms';
import {Column} from 'components/molecules';
import {default as styles} from './GameBoardStyle.js';

const GameBoard = ({board, colors, handleClick}) => {
    return (
        <div className={css(styles.GameBoard)}>
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
