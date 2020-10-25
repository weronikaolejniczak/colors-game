import React from 'react';
import {default as styles} from './ColumnStyle.js';
import {css} from 'aphrodite';

const Column = ({index, children}) => {
    return (
        <div
            id={`col-${index}`}
            className={css(styles.Column)}
        >
            {children}
        </div>
    );
}

export default Column;
