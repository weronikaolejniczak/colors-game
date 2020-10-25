import React from 'react';
import {default as styles} from './BlockStyle.js';
import {css} from 'aphrodite';

const Block = ({parentId, index, cell, colors, handleClick}) => {
    return (
        <div
            id={`block-${parentId}-${index}`}
            className={css(styles.Block)}
            style={{backgroundColor: `${colors[cell]}`}}
            onClick={(event) => handleClick(event)}
        />
    );
}

export default Block;
