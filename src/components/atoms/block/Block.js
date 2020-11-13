import React from 'react';
import {css} from 'aphrodite';

import {default as styles} from './BlockStyle.js';

const Block = ({parentId, index, cell, colors, handleClick}) => {
    return (
        <div
            id={`block-${parentId}-${index}`}
            className={css(styles.Block)}
            style={{backgroundColor: `${colors[cell]}`}}
            onClick={handleClick}
        />
    );
}

export default Block;
