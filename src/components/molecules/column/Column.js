import React from 'react';
import {css} from 'aphrodite';

import {default as styles} from './ColumnStyle.js';

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
