import React from 'react';
import {css} from 'aphrodite';

import {default as styles} from './ButtonStyle.js';

const Button = ({handleClick, label}) => {
    return (
        <button
            className={css(styles.Button)}
            onClick={handleClick}
        >
            {label}
        </button>
    );
}

export default Button;
